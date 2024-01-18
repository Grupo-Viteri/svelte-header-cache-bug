import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";


const dontCachePage: Handle = async ({ event, resolve }) => {
    // Continue with the request resolution if not in the protected routes
    if (!event.route.id?.includes("protected")) return resolve(event);

    console.log("Dont Cache Page");

    const response = await resolve(event);
    response.headers.set("cache-control", "no-store");
    response.headers.set("CDN-Cache-Control", "no-store");

    return response;
}


export const handle: Handle = sequence(dontCachePage);