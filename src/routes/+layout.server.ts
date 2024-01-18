import type { LayoutServerLoad } from "./$types";

export const prerender = true;


export const load: LayoutServerLoad = async ({ setHeaders }) => {

    setHeaders({
        "Cache-Control": "public, max-age=86400",
        "CDN-Cache-Control": "public, max-age=86400"
    });

}