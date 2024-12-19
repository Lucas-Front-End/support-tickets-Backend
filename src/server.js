import http from "node:http"

import { jsonHandlers } from "./middlewares/jsonHandlers.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response){
     await jsonHandlers(request, response)
     routeHandler(request, response)
}

http.createServer(listener).listen(8888)