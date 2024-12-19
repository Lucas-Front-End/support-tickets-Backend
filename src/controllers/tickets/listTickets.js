/* eslint-disable @typescript-eslint/no-unused-vars */
export function listTickets({request, response, database}) {
    const {status} = request.query    
    const filters = status ? { status } : null
    const tickets = database.select("tickets", filters)

    return response.end(JSON.stringify(tickets))
}