import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts";

export async function GetDataFromDatabase(question:string) {

    const client = await new Client().connect({
        hostname: "ytw.h.filess.io",
        username: "Portfolio_mixtureask",
        db: "Portfolio_mixtureask",
        password: "c0597ba028d8b9d4b468236617d3cd2766c32d99",
        port: 3307
    });

    const data = await client.query(question);
    return data;
}