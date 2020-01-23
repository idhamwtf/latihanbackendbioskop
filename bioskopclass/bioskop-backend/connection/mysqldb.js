const mysql = require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'idham',
    database:'bioskop',
    port:'3306',
    multipleStatements:true
})
module.exports=db