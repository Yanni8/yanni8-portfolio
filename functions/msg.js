export async function onRequest(context) {
    const { request } = context;
    const { searchParams } = new URL(request.url)
    const { DB } = context.env;

    if (request.method === "GET") {
        return new Response(null, {
            status: 405
        })
    }

    const json = await request.json()


    console.log(json)

    const { results } = await DB.prepare(
        "INSERT INTO message (email, message) VALUES (?, ?)"
    )
        .bind(json["email"], json["comment"])
        .all();

    return new Response();
}

