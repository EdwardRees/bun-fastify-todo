import Fastify, { FastifyReply, FastifyRequest } from "fastify";



const fastify = Fastify({ logger: true });

fastify.get("/api/", async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 || process.env.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
