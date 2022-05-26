import pg from "pg";

async function connect(){
    if(global.connection) {
        return global.connection.connect();
    }

    const pool = pg.Pool({
        connectionString: process.env.CONNECTION_STRING,
    });

    global.connection = poll;
    return pool.connect();
}

export default {
    connect
}