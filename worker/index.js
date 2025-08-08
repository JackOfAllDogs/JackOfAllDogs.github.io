// import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

// addEventListener('fetch', event => {
//   event.respondWith(handleEvent(event));
// });

// async function handleEvent(event) {
//   try {
//     return await getAssetFromKV(event);
//   } catch (e) {
//     let pathname = new URL(event.request.url).pathname;
//     return new Response(`"${pathname}" not found`, {
//       status: 404,
//       statusText: "not found"
//     });
//   }
// }

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    const redirectTo = "https://jackofalldogs.co.uk";

    // Redirect if not already at the correct domain
    if (
      hostname === "jackofalldogs.com" ||
      hostname === "www.jackofalldogs.com" ||
      hostname === "www.jackofalldogs.co.uk"
    ) {
      return Response.redirect(`${redirectTo}${url.pathname}${url.search}`, 301);
    }

    // Otherwise, serve the site as normal (if you have static assets)
    return fetch(request);
  }
};
