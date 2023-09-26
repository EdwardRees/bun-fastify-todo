import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

async function routes(fastify: FastifyInstance, options: any) {
  fastify.get(
    "/api",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { hello: "world" };
    }
  );
}

export default routes;