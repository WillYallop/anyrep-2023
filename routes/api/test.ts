import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(req) {
    return Response.json({
      test: true,
    });
  },
};
