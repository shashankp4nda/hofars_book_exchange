// imports

const User = require("./model/user_model.js");
const Book = require("./model/book_model.js");
const connUrl = require("./dbconnection.js");

// middleware

require("./dbconnection.js");

const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());


//book 

app.post("/bookInfo", async (req, res) => {
    try {
        console.log(req.body);
        const {bookName, MRP, author, description, category, genre, yearOfRelease, bookRating, LenderName} = req.body;
        const book = await Book.create({bookName, MRP, author, description, category, genre, yearOfRelease, bookRating,LenderName})
        const Lender = await User.findOneAndUpdate({name: LenderName}, {$push: {lended: book.bookID}}, {new: true})
        res.status(201).send(book)
    }
    catch ( error )     {
        res.json({
            error:error.message
        })
    }
});

app.get("/bookInfo", async (req, res) =>    {
    try     {
        console.log(req.body);
        const bookName = req.body.bookName;
        const searchItem = await Book.find({bookName});
        res.send(searchItem);
    }
    catch (error)   {
        res.json({
            error: error.message
        })
    }
});


// signup

app.post("/signup", async (req, res) => {  
    try {
        console.log(req.body);
        let {email, firstname,lastname,password,rating, address,country, zipcode, phNo, student, classs} = req.body;

        const userexist = await User.findOne({email})

        if(!userexist)
        {

            const user = await User.create({email,firstname,lastname,password,rating, address,country, zipcode, phNo, student, classs, name:`${firstname} ${lastname}`})
    
            res.status(201).send(user)
        }
        else{
            res.json({
                message:"UserExist"
            })
        }
    } catch (error) {
        if(error.message==="users validation failed: email: Not a valid Email"){
            res.json({
                message:"Type Correct Email"
            })
        }
       else{
           res.json({
               error:error.message
           })
    }
    }
});

app.post("/signin", async (req, res) => {  
    try {
        console.log(req.body);
        let {email, password} = req.body

        const userexist = await User.findOne({email})

        if(!userexist)
        {
            res.json({
                message:"UserDoesn'tExist"
            })
            res.status(201).send(user)
        }
        else{
            if (userexist.password === password) {
                res.json({
                    message:"SignedInSuccessfully"
                })
            } else {
                res.json({
                    message:"incorrectpassword"
                })
            }
        }
    } catch (error) {
        if(error.message==="users validation failed: email: Not a valid Email"){
            res.json({
                message:"Type Correct Email"
            })
        }
       else{
           res.json({
               error:error.message
           })
    }
    }
});

// server info

app.get("/", (req, res) => {
    res.send("hello world");
});

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);

// listener

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
