// see a list of pre-populated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies

const express = require('express');

const server = express();

let actors = [
    {
        id: 1,
        name: 'Elijah Wood',
        movies: [1, 2]
    },
    {
        id: 2,
        name: 'Chris Evans',
        movies: [4],
    },
]
let movies = [
    {
        id: 1,
        name: "The Fellowship of the Rings",
        released: true,
        rating: 5
    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 5,
    },
    {
        id: 3,
        name: "The Childre of Hurin",
        released: false,
        rating: null,
    },
    {
        id: 4,
        name: "Avengers Endgame",
        released: true,
        rating: 3,
    },
];

// sanity check endpoint
server.get('/', (req, res) => {
    res.status(200).json({api:"up...."});
});

server.get('/api/movies', (req, res) => {
    res.status(200).json(movies);
});

//as user of this api, I want an endpoint to see a list of actors, so that I can see all the actors
server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
});

// export default server; //ES2015 modules
module.exports = server; // commonJS modules (node)

//different way of exporting
// exports.add = (a, b) => { return a+b }

// exports.secret = 'keep it secret,  keep it safe'