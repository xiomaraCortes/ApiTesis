import sql from "mssql";

export async function conecion(){
    var config = {
        server: 'us-cdbr-east-05.cleardb.net',
        database:'heroku_eba584c843cbe15',
        user:'b31f987925bf35', 
        password:'9e84a48c',
        
        // port:1433,
        drive:'tedios',
        stream:false,

        pool: {
            max: 20,
            min: 0,
            idleTimeoutMillis: 3000
        }
    }
    const conn = await new sql.ConnectionPool(config).connect()
    return conn;
}