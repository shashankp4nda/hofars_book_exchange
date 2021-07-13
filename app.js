// imports

const User = require("./model/user_model.js");
const connUrl = require("./dbconnection.js");

// middleware

require("./dbconnection.js");

const http = require('http');

const express = require('express');

const app = express();

app.post("/signup", async (req, res) => {  
    try {
        const { email, firstname, lastname, password } = req.body;
    } catch (error) {
        
    }
});

// server info

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);

// listener

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
