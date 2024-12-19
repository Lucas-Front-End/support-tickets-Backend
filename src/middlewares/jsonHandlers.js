/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
export async function jsonHandlers(request, response) {
    const buffers =[]

    for await (const chunk of request){
        buffers.push(chunk)
    }

    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("content-Type","appication/json")
}