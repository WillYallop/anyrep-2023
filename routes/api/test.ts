import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST() {
    return Response.json({
      success: true,
    });
  },
};
