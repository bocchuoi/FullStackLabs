var express = require("express")
var app = express()

// GET request: /hello return "Hello Express JS"
app.get('/hello', (req, res) => {
    res.send("Hello Express JS")
}) 
// GET request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use Querystring to send values
app.get('/user', (req, res) => {
    person = {
        firstname:req.query.firstname,
        lastname:req.query.lastname
    }
    res.send(JSON.stringify(person))
}) 
// POST request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use path parameter to send values
app.get('/user/:fname/:lname', (req, res) => {
    person = {
        firstname:req.params.fname,
        lastname:req.params.lname
    }
    res.send(JSON.stringify(person))
}) 

app.listen(8099, (req, res) => {
    console.log("Listening on port 8099")
})