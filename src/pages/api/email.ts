// File: src/pages/api/email.ts
import type { APIRoute } from "astro";
import { Resend } from "resend";

const emailTemplate = (data: {
  name: string;
  email: string;
  phoneNumber: string;
  appliance: string;
  message: string;
  appUrl: string;
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style type="text/css">
       * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: helvetica;
        padding: 0;
        margin: 0;
      }
      p {
        color: #1d1d1d;
      }
      span {
        color: #1f1f1f;
      }
      body {
        background: #ebecf0;
        font-family: "Inter", sans-serif;
      }
      .container {
        max-width: 650px;
        margin: 0 auto;
        padding: 20px 5px;
      }
      .logo {
        height: 40px;
        display: block;
        text-align: center;
      }
      .logo img {
        height: 40px;
        display:block;
      }
      .inner {
        background-color: #fff;
        border-radius: 10px;
        margin-top: 20px;
        width: 100%;
      }
      .inner header {
        padding: 40px 20px;
        background-color: #001524;
        border-radius: 10px;
      }
      header h1,
      header p {
        text-align: center;
        color: white;
        max-width: 450px;
        margin: 0 auto;
      }
      header h1 {
        font-size: 24px;
      }
      header p {
        margin-top: 10px;
        font-size: 18px;
      }
      .content-outer {
        padding: 30px 15px;
      }
      .content-outer-one {
        padding-bottom: 20px;
      }
      .content-outer-two {
        padding-top: 0;
      }
      .content-outer:last-child {
        padding-top: 0;
      }
      .content-outer h2 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .content-inner {
        padding: 15px;
        border: 1px solid #dadada;
        border-radius: 10px;
      }
      .content-inner div {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .content-inner div .list-item {
        padding: 5px 0;
        margin: 0;
      }
      .content-inner div .list-item span {
        font-weight: 700;
        margin-right: 10px;
      }
      .content-inner div .list-item:first-child {
        padding-top: 0;
      }
      .content-inner div .list-item:last-child {
        padding-bottom: 0;
      }
      a {
        color: #f82929;
      }
    </style>
  </head>
  <body style="background-color: #ebecf0">
    <div class="container">
      <a href="https://www.anyrep.co.uk" class="logo">
        <img
          src="${data.appUrl}/anyrep-logo.png"
          alt="Anyrep Appliance Repairs"
          title="Anyrep Appliance Repairs"
          height="40px"
          width="116px"
        />
      </a>
      <div class="inner">
        <header>
          <h1>Booking enquiry</h1>
          <p>
            Thank you for sending a booking enquiry with Anyrep! We will get
            back to you as soon as possible.
          </p>
        </header>
        <div class="content-outer content-outer-one">
          <h2>Details</h2>
          <div class="content-inner">
            <div>
              <div class="list-item"><span>Name</span> ${data.name}</div>
              <div class="list-item">
                <span>Email</span>
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
              <div class="list-item">
                <span>Phone</span>
                <a href="tel:${data.phoneNumber}">${data.phoneNumber}</a>
              </div>
              <div class="list-item">
                <span>Appliance</span> ${data.appliance}
              </div>
            </div>
          </div>
        </div>
        <div class="content-outer content-outer-two">
          <h2>Message</h2>
          <div class="content-inner">
            <p>${data.message}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

type RecaptchaErrors = Array<string>;

interface BookingData {
  to: string;
  token: string;
  data: {
    name: string;
    email: string;
    number: string;
    appliance: string;
    message: string;
  };
}

const verifySite = async (token: string, secret: string) => {
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const response = await fetch(url, {
    body: formData,
    method: "POST",
  });
  const data = await response.json();
  if (data.success) {
    return {
      success: true,
    };
  } else {
    return {
      success: false,
      errors: data["error-codes"] as RecaptchaErrors,
    };
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const bookingData: BookingData = await request.json();

    const appUrl = "https://anyrep.co.uk";

    const siteVerified = await verifySite(
      bookingData.token,
      import.meta.env.SECRET_TURNSTILE_SECRET as string
    );
    if (!siteVerified.success) {
      return new Response(
        JSON.stringify({
          code: 401,
          type: "RECAPTCHA",
          message: "Invalid turnstile token",
          errors: siteVerified.errors,
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY as string);

    const { data, error } = await resend.emails.send({
      from: "Anyrep Appliance Repairs <noreply@anyrep.co.uk>",
      to: [bookingData.to, "anyrep@gmail.com"],
      subject: "Anyrep Booking Enquiry",
      replyTo: bookingData.data.email,
      html: emailTemplate({
        name: bookingData.data.name,
        email: bookingData.data.email,
        phoneNumber: bookingData.data.number,
        appliance: bookingData.data.appliance,
        message: bookingData.data.message,
        appUrl: appUrl,
      }),
    });
    if (error) {
      return new Response(
        JSON.stringify({
          code: 500,
          type: "EMAIL",
          message: "Failed to send email, please try again later",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        code: 200,
        type: "EMAIL",
        message: "Thank you for your enquiry, we will be in touch shortly. If you are not recieving an email, please check your spam folder.",
        data: data,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({
        code: 500,
        type: "UNEXPECTED",
        message: "An unexpected error occurred. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
export const prerender = false;
