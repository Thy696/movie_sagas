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

// app.post('/genres', (req, res) => {
//     let query = `INSERT INTO "genres" ("name")
//                  VALUES ($1)`;
//     pool.query(query, [req.body.name]).then( result => {
//       res.sendStatus(200);
//     }).catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     })
//   })

// app.get(`/genres/:id`, (req, res) => {
//     //go to database, get all of data from movies table and order them by id
//     const titleToGet = req.params.id;
//     console.log('------------> get req.param',titleToGet)
//     const queryText = `SELECT array_agg(genres.name) AS genres FROM movies 
//     JOIN junction ON movies.id = junction.movie_id
//     JOIN genres ON genres.id = junction.genres_id
//     WHERE movies.id = $1;`
//     pool.query(queryText, [titleToGet])
//         .then((result) => {
//                 console.log(`Title for genres: ${titleToGet}`)
//             res.send(result.rows);//return rows
//         }).catch(err => {
//             console.log('Error on GET genres', err);
//         })
// })


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});