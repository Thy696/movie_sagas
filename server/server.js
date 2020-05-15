const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const axios = require ('axios');
//create pool variable to connecting with pool.js file in modules folfer
const pool = require('./modules/pool')


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
//GET data from database by axios
app.get('/movies' , (req,res) =>{
    //go to database, get all of data from movies table and order them by id
    const queryText = `SELECT * FROM movies ORDER BY id`; 
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);//return rows
    }).catch(err =>{
        console.log('Error on query', err);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});