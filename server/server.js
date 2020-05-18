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
//GET data movies from database by axios
app.get('/movies', (req, res) => {
    //go to database, get all of data from movies table join with junction and genres to get the genres for the selected movie
    const queryText = `SELECT movies.id, movies.title, movies.poster, movies.description ,array_agg(genres.name) as genres  FROM movies 
    JOIN junction ON movies.id = junction.movie_id
    JOIN genres ON genres.id = junction.genres_id
    GROUP BY movies.id
    ORDER BY movies.title;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);//send rows to client-side
        }).catch(err => {
            console.log('Error on query', err);
        })
})

//GET data movies that we are searching from database by axios
app.get('/search/:searchValue', (req, res) => {
    console.log('in /search GET:', req.params.searchValue);
    let searchValue = req.params.searchValue;
    const queryText = (`SELECT "title","poster", "description" FROM "movies" 
    WHERE "title" LIKE '%${searchValue}%';`)
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        }).catch((err) => {
            console.log(err);
            res.send(500);
        });//end axios
    // res.send(req.params.searchValue);
});//end get

// GET new genres that from database by axios
app.get(`/genres`, (req, res) => {
    //go to database, get all of data from movies table and order them by id
    const queryText = `SELECT * FROM genres ORDER BY id`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);//return rows
        }).catch(err => {
            console.log('Error on GET genres', err);
        })
})

//POST new genres to database by axios
app.post(`/genres`, (req, res) => {
    console.log('send this to database: ',req.body.genres);
    const queryText = `INSERT INTO "genres" ("name") VALUES ($1)`;
    pool.query(queryText, [req.body.genres])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    // res.sendStatus(200); // test if post request is work
})

app.delete('/genres/:id', (req, res) => {
    let genresId = req.params.id;// We are using a request parameter (req.params) to identify
    // the specific picture. We expect this will be an id from the database.
    console.log('Delete request for this id: ', genresId);
    let sqlText = `DELETE FROM genres WHERE id = $1`;
    pool.query(sqlText, [genresId])
        .then(result => {
            console.log('in DELETE router')
            res.sendStatus(200);
        }).catch(err => {
            console.log('Error in DELETE route', err);
            res.sendStatus(500);
        })
})


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});