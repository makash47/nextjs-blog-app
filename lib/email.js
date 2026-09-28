

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({ email, url }) {
  await resend.emails.send({
    from: "Blogify <onboarding@resend.dev>",
    to: email,
    subject: "Verify your Blogify account",
    html: `
      <h2>Welcome to Blogify</h2>

      <p>
        Please verify your email address by clicking the button below.
      </p>

      <a href="${url}">
        Verify Email
      </a>
    `,
  });

}

