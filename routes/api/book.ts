import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.2.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
const { SMTP_EMAIL, SMTP_PASS, FROM_EMAIL } = Deno.env.toObject();

export const handler: Handlers = {
  async POST(req) {
    const data = await req.json();

    const client = new SMTPClient({
      connection: {
        hostname: "smtp-relay.sendinblue.com",
        port: 587,
        tls: true,
        auth: {
          username: SMTP_EMAIL as string,
          password: SMTP_PASS as string,
        },
      },
    });

    console.log(client);

    const subject = "Anyrep Booking Enquiry";
    const content = `Name: ${data.name}. Phone: ${data.number}. Email: ${data.email}. Appliance: ${data.appliance}. Issue: ${data.message}`;
    const html = `<!DOCTYPE html><html> <head> <style type="text/css"> *{box-sizing: border-box; font-family: helvetica; padding: 0; margin: 0;}p{color: #2b2b2b;}li{color: #2b2b2b;}</style> </head> <body style=" background-color: #110f26; padding: 20px; font-family: helvetica; color: #2b2b2b; " > <div style=" background-color: #fff; border-radius: 10px; width: 100%; max-width: 600px; margin: 0 auto; overflow: hidden; " > <div style="padding: 30px 30px 0; margin-bottom: 30px"> <a href="https://anyrep.co.uk" style=" font-size: 25px; font-weight: bold; text-decoration: none; color: #2b2b2b; height: 30px; " ><img style="height: 30px" src="https://res.cloudinary.com/dbgfjb4cp/image/upload/v1602073643/Group_1106_1_rp4gcc.png" alt/></a> <p style="font-size: 18px; margin: 30px 0 15px"> Booking enquiry for ${data.name}</p><p style="font-weight: bold"> Thank you for sending a booking enquiry with Anyrep Appliance Repairs! </p><p style=" margin: 15px 0 0; padding: 15px 0 0; border-top: 1px solid #e1e1e1; " > <b>Details:</b> </p><ul style="list-style-type: none; margin-top: 10px"> <li><b>Name:</b> ${data.name}</li><li><b>Phone:</b> ${data.number}</li><li><b>Email:</b> ${data.email}</li><li><b>Appliance:</b> ${data.appliance}</li><li><b>Issue:</b> ${data.message}</li></ul> </div></div></body></html>`;

    try {
      await client.send({
        from: FROM_EMAIL,
        to: "anyrep@googlemail.com",
        cc: [data.email],
        subject: subject,
        content: content,
        html: html,
        priority: "high",
      });
      await client.close();

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
