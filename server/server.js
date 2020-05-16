const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const axios = require('axios');
//create pool variable to connecting with pool.js file in modules folfer
const pool = require('./modules/pool')


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
//GET data from database by axios
app.get('/movies', (req, res) => {
    //go to database, get all of data from movies table and order them by id
    const queryText = `SELECT * FROM movies ORDER BY id`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);//return rows
        }).catch(err => {
            console.log('Error on query', err);
        })
})

app.get(`/genres/:name`, (req, res) => {
    //go to database, get all of data from movies table and order them by id
    const titleToGet = req.body.name;
    console.log('------------> get req.param',titleToGet)
    const queryText = `SELECT genres.name AS genrer, movies.title as movie FROM movies 
    JOIN junction ON movies.id = junction.movie_id
    JOIN genres ON genres.id = junction.genres_id
    WHERE movies.title = '$1';`
    pool.query(queryText, [titleToGet])
        .then((result) => {
            console.log(`Title for genres: ${titleToGet}`)
            res.send(result.rows);//return rows
        }).catch(err => {
            console.log('Error on GET genres', err);
        })
})

// app.get(`/genres/:name`, (req, res) => {
//     //go to database, get all of data from movies table and order them by id
//     // const titleToGet = req.params
//     // console.log('------------> get req.param', req.params)
//     const queryText = `SELECT genres.name, movies.title FROM movies 
//     JOIN junction ON movies.id = junction.movie_id
//     JOIN genres ON genres.id = junction.genres_id
//     WHERE movies.title = 'Finding Nemo';`
//     pool.query(queryText)
//         .then((result) => {
//             // console.log(`Title for genres: ${titleToGet}`)
//             res.send(result.rows);//return rows
//         }).catch(err => {
//             console.log('Error on GET genres', err);
//         })
// })
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});