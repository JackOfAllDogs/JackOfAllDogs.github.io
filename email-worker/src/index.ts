// index.ts
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

        let data: { dog_name?: string; owner_name?: string; email?: string; message?: string }
        try {
            data = await request.json()
        } catch {
            return new Response("Invalid JSON", {
            status: 400,
            headers: { "Access-Control-Allow-Origin": "*" }
            })
        }

        // --- Crucial Change Here ---
        // Ensure required fields exist before proceeding
        if (!data.owner_name || !data.email || !data.message) {
            return new Response("Missing required form data (owner_name, email, or message).", {
                status: 400,
                headers: { "Access-Control-Allow-Origin": "*" }
            });
        }
        // --- End Crucial Change ---
        
        const resend = new Resend(env.RESEND_API_KEY)

        try { // Add a try-catch block here to catch errors from Resend SDK or template literals
            const { error } = await resend.emails.send({
                from: "jack@jackofalldogs.co.uk",
                to: "jack@jackofalldogs.co.uk",
                subject: `New message from ${data.owner_name}`, // Use data.owner_name
                replyTo: data.email,
                html: `
                    <p><strong>From:</strong> ${data.owner_name} (${data.email})</p>
                    <p><strong>Dog's Name:</strong> ${data.dog_name || 'N/A'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${data.message}</p>
                `
            })

            if (error) {
                console.error("Resend API error:", error); // Log the actual error
                return new Response(JSON.stringify({ message: "Failed to send email via Resend API", details: error.message }), {
                    status: 500,
                    headers: { "Access-Control-Allow-Origin": "*" }
                });
            }

            return new Response("Email sent!", {
                status: 200,
                headers: { "Access-Control-Allow-Origin": "*" }
            })
        } catch (e: any) { // Catch any other exceptions during the process
            console.error("Uncaught error in Worker:", e);
            return new Response(JSON.stringify({ message: "Internal Server Error during email sending", error: e.message }), {
                status: 500,
                headers: { "Access-Control-Allow-Origin": "*" }
            });
        }
    }
}

// /**
//  * Cloudflare Worker to handle contact form submissions via Resend API
//  * - Accepts POST requests from allowed origins
//  * - Sends transactional emails via Resend
//  * - Protects against misuse with limited CORS
//  */

// import { Resend } from "resend"

// interface Env {
// 	RESEND_API_KEY: string;
// }

// const ALLOWED_ORIGINS = [
// 	"https://jackofalldogs.co.uk",
// 	"https://www.jackofalldogs.co.uk"
// ]

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		if (request.method === "OPTIONS") {
// 			return new Response(null, {
// 			status: 204,
// 			headers: {
// 				"Access-Control-Allow-Origin": "*",
// 				"Access-Control-Allow-Methods": "POST, OPTIONS",
// 				"Access-Control-Allow-Headers": "Content-Type",
// 			},
// 			})
// 		}

// 		if (request.method !== "POST") {
// 			return new Response("Method Not Allowed", { status: 405 })
// 		}

// 		let data
// 		try {
// 			data = await request.json()
// 		} catch {
// 			return new Response("Invalid JSON", {
// 			status: 400,
// 			headers: { "Access-Control-Allow-Origin": "*" }
// 			})
// 		}
// 		const resend = new Resend(env.RESEND_API_KEY)

// 		const { error } = await resend.emails.send({
// 		from: "jack@jackofalldogs.co.uk",
// 		to: "jack@jackofalldogs.co.uk",
// 		subject: `New message from ${data.name}`,
// 		replyTo: data.email,
// 		html: `<p><strong>From:</strong> ${data.email}</p><p>${data.message}</p>`
// 		})

// 		if (error) {
// 		return new Response("Failed to send email", {
// 			status: 500,
// 			headers: { "Access-Control-Allow-Origin": "*" }
// 		})
// 		}

// 		return new Response("Email sent!", {
// 		status: 200,
// 		headers: { "Access-Control-Allow-Origin": "*" }
// 		})
//   	}
// }
