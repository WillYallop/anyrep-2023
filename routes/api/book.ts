import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const data = await req.json();
    try {
      // make a fetch request to https://api.williamyallop.com/v1/anyrep/email/book and append the data to the body
      fetch("https://api.williamyallop.com/v1/anyrep/email/book", {
        method: "POST",
        body: JSON.stringify(data),
      });
      // const json = await res.json();
      return Response.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      return Response.json({
        success: false,
      });
    }
  },
};
