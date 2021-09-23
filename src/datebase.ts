import sql from "mssql";

export async function conecion(){
    var config = {
        server: '192.168.0.29',
        database:'LovePet',
        user:'sa', 
        password:'_falso00',
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