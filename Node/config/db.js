const Pool = require('pg').Pool;
const db = new Pool({
    user:'ecoa',
    password:'password',
    host:'localhost',
    port:5432,
    database:'ecoas_db_final',
});

module.exports = {db};
