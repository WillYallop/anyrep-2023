import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    return Response.json({
      test: await true,
    });
  },
};
