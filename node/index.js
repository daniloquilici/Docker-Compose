const express = require('express')
const app = express()
const port = 3000
// const config = {
//     host: 'db',
//     user: 'root',
//     password: 'root',
//     database:'nodedb'
// };
// const mysql = require('mysql')
// const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('Danilo')`
// connection.query(sql)
// connection.end()

// let table = '<table>';
// connection.query("Select Id, Name from people", function(error, results, fields) {
//     if (error) {
//         throw error
//       };
          
//       table += '<tr><th>Id</th><th>Name</th></tr>';
//       for(let people of results) {      
//         table += `<tr><td>${people.Id}</td><td>${people.Name}</td></tr>`;
//       }
  
//       table += '</table>';
//     });   
// connection.end();

// app.get('/', (req,res) => {
//     res.send('<h1>Full Cycle Rocks!!</h1> <br />' + table)
// })

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})