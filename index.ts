require("reflect-metadata");

import { buildSchema } from "type-graphql";
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';

import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { createFetch } from '@whatwg-node/fetch';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { resolvers } from "./prisma/generated/type-graphql";
import { useSentry } from '@envelop/sentry';
import { useSofaWithSwaggerUI } from '@graphql-yoga/plugin-sofa'
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

import '@sentry/tracing';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'

// This is the fastify instance you have created
const app = fastify({
  logger: true
})

// Setting cors and logging capabilities

var cors = require('cors')

app.options('*', cors())

// Pulling our Graphql Resolvers from Type-graphql & Prisma generation

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  // Connect to Prisma

  const prisma = new PrismaClient();
  await prisma.$connect();

  // Graphql Server main function 

  const yoga = createYoga < {
    req: FastifyRequest
    reply: FastifyReply
    event: APIGatewayEvent
    lambdaContext: Context
  } > ({
    // Integrate Fastify logger
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg))
    },
    schema,
    batching: true,
    cors: {
      origin: '*',
      credentials: true,
    },
    context: ({}) => ({
      prisma,
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useGraphQlJit({}),
      useSentry({
        includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
        includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
        includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      }),
       useSofaWithSwaggerUI({
        basePath: '/rest',
        swaggerUIEndpoint: '/swagger',
        servers: [
          {
            url: '/', // Specify Server's URL.
            description: 'Development server'
          }
        ],
        info: {
          title: 'Example API',
          version: '1.0.0'
        }
      })
    ],
    fetchAPI: createFetch({
      // We prefer `node-fetch` over `undici` and current unstable Node's implementation
      useNodeFetch: true,
      formDataLimits: {
        // Maximum allowed file size (in bytes)
        fileSize: 1000000,
        // Maximum allowed number of files
        files: 10,
        // Maximum allowed size of content (operations, variables etc...)
        fieldSize: 1000000,
        // Maximum allowed header size for form data
        headerSize: 1000000
      }
    })
  });

  const server = createServer(yoga)

  app.route({
    url: '/graphql',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply
      })
      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })

      reply.status(response.status)

      reply.send(response.body)

      return reply
    }
    
  })

  // Serverless Lambda feature

  async function handler(
    event: APIGatewayEvent,
    lambdaContext: Context
  ): Promise<APIGatewayProxyResult> {
    const url = new URL(event.path, 'http://localhost')
    if (event.queryStringParameters != null) {
      for (const name in event.queryStringParameters) {
        const value = event.queryStringParameters[name]
        if (value != null) {
          url.searchParams.set(name, value)
        }
      }
    }
  
    const response = await yoga.fetch(
      url,
      {
        method: event.httpMethod,
        headers: event.headers as HeadersInit,
        body: event.body
          ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
          : undefined
      },
      {
        event,
        lambdaContext
      }
    )
  
    const responseHeaders: Record<string, string> = {}
  
    response.headers.forEach((value, name) => {
      responseHeaders[name] = value
    })
  
    return {
      statusCode: response.status,
      headers: responseHeaders,
      body: await response.text(),
      isBase64Encoded: false
    }
  }

  server.listen(4005, () => {
    console.info('Server is running on http://localhost:4005/graphql')
  })
}



main().catch((e) => {
  console.error(e);
  process.exit(1);
});