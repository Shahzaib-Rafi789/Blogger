const mysql = require('mysql') ;
const connection= mysql.createConnection({
    host: 'bct2y3yvqswfmmxhelpz-mysql.services.clever-cloud.com',
    user: 'uvct2xwy9wr3n4lh',
    password: 'OOhnBshO4H81qo8TtGUi',
    database: 'bct2y3yvqswfmmxhelpz',
    port: '3306',
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected') ;
});
module.exports={connection};