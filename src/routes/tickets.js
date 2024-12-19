import { create } from "../controllers/tickets/create.js"
import { deleted } from "../controllers/tickets/deleted.js"
import { listTickets } from "../controllers/tickets/listTickets.js"
import { update } from "../controllers/tickets/updade.js"
import { updateStatus } from "../controllers/tickets/updadeStatus.js"

export const tickets = [
    {
        method: "GET",
        path: "/tickets",
        controller: listTickets,
    },
    {
        method: "POST",
        path: "/tickets",
        controller: create,
    },
    {
        method: "PUT",
        path: "/tickets/:id",
        controller: update,
    },
    {
        method: "PATCH",
        path: "/tickets/:id/closed",
        controller: updateStatus,
    },
    {
        method: "DELETE",
        path: "/tickets/:id/deleted",
        controller: deleted,
    }
]