import { Handlers } from "$fresh/server.ts";
import { sendSimpleMail } from "https://deno.land/x/sendgrid/mod.ts";
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");

export const handler: Handlers = {
  async POST() {
    const response = await sendSimpleMail(
      {
        subject: "Hello world",
        to: [{ email: "hello@williamyallop.com" }],
        from: { email: "anyrep@gmail.com" },
        content: [
          { type: "text/plain", value: "Hello world" },
          { type: "text/html", value: "<h1>Hello world</h1>" },
        ],
      },
      {
        apiKey: SENDGRID_API_KEY as string,
      }
    );
    return Response.json({
      message: "Email sent",
      res: response,
    });
  },
};
