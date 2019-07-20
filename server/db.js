const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'Project',
        port: 3306
    });

    connection.connect();
    return connection;
}

module.exports =  {
    connect: connect
};
