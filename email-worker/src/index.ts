// /**
//  * Cloudflare Worker to handle contact form submissions via Resend API
//  * - Accepts POST requests from allowed origins
//  * - Sends transactional emails via Resend
//  * - Protects against misuse with limited CORS
//  */

import { Resend } from "resend"

interface Env {
	RESEND_API_KEY: string;
}

const ALLOWED_ORIGINS = [
	"https://jackofalldogs.co.uk",
	"https://www.jackofalldogs.co.uk"
]

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === "OPTIONS") {
			return new Response(null, {
			status: 204,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
			})
		}

		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405 })
		}

		let data
		try {
			data = await request.json()
		} catch {
			return new Response("Invalid JSON", {
			status: 400,
			headers: { "Access-Control-Allow-Origin": "*" }
			})
		}
		const resend = new Resend(env.RESEND_API_KEY)

		const { error } = await resend.emails.send({
		from: "jack@jackofalldogs.co.uk",
		to: "jack@jackofalldogs.co.uk",
		subject: `New message from ${data.name}`,
		replyTo: data.email,
		html: `<p><strong>From:</strong> ${data.email}</p><p>${data.message}</p>`
		})

		if (error) {
		return new Response("Failed to send email", {
			status: 500,
			headers: { "Access-Control-Allow-Origin": "*" }
		})
		}

		return new Response("Email sent!", {
		status: 200,
		headers: { "Access-Control-Allow-Origin": "*" }
		})
  	}
}
