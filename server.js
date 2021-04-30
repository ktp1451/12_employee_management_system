const connection = require('./db/connection')

connection.query("SELECT * from department", function(err, data){
    console.log(data)
})