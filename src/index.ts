import * as ReactDOMServer from "react-dom/server";

export function ReactDOMResponse(element: React.ReactElement<any, string | React.JSXElementConstructor<any>>, init?: ResponseInit): Response {
    return new Response(`<!DOCTYPE html>${ReactDOMServer.renderToString(element)}`, {
        ...init,

        headers: {
            "Content-Type": "text/html",

            ...init?.headers
        }
    });
};
