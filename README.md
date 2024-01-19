I believe there might be a bug in SvelteKit, and I've created a test case to illustrate the issue.

Here's the scenario: I aim to establish global cache headers, but with exceptions for protected routes. The plan is to define the global cache headers in the +layout.server.ts file. However, if the route is protected, I want to override the headers to be set as "no-store."

To implement this, I include the headers in +layout.server.ts and then create a handle function in hooks.server.ts to modify the headers specifically for protected routes.

The problem arises when a module is incorrectly imported in the protected route. In such cases, the script fails, but the error message is misleading. Instead of indicating the import issue, it displays an unrelated error message: "Error: "Cache-Control" header is already set."

Please load the project and go to `http://localhost:5173/protected`. To see the change in behavior go to `/src/routes/protected/+page.svelte` and modify the file
