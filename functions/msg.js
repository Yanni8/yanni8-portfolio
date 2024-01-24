var src_default = {

    async fetch(request, env) {
      const { searchParams } = new URL(request.url)
      const { DB } = env;
  
      if (request.method === "GET"){
        return new Response(null, {
          status: 405
        })
      }
  
      const json = await request.json()
  
  
      console.log(json)
  
      const { results } = await env.DB.prepare(
        "INSERT INTO message (email, message) VALUES (?, ?)"
      )
      .bind(json["email"], json["comment"])
      .all();
  
      return new Response();
    }
  };
  export {
    src_default as default
  };
  