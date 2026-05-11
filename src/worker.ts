import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    // Serve static assets for everything else
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://istvanszasz99.dev",
    "Content-Type": "application/json",
  };

  try {
    const body = await request.json<{
      name?: string;
      email?: string;
      message?: string;
    }>();

    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: corsHeaders },
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["istvanszasz99@gmail.com"],
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} — istvanszasz99.dev`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#ffffff;border-radius:8px;">
          <h2 style="color:#ccff00;margin-top:0;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#888;width:80px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;color:#fff;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;vertical-align:top;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email.trim()}" style="color:#ccff00;">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;vertical-align:top;">Message</td>
              <td style="padding:8px 0;color:#fff;white-space:pre-wrap;">${message.trim()}</td>
            </tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#555;">Sent from istvanszasz99.dev contact form</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("[contact] error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500, headers: corsHeaders },
    );
  }
}
