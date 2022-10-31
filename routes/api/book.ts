import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const data = await req.json();
    try {
      // make a fetch request to https://api.williamyallop.com/v1/anyrep/email/book and append the data to the body with json header
      const send = await fetch("https://api.williamyallop.com/v1/email", {
        method: "POST",
        body: JSON.stringify({
          user: "anyrep",
          template: "book",
          to: data.template.email,
          subject: "Anyrep Booking Enquiry",
          token: data.token,
          data: data.template,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await send.json();
      return Response.json(json);
    } catch (err) {
      return Response.json(err);
    }
  },
};
