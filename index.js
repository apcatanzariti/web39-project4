require('dotenv').config();

const express = require('express');


const server = express();

server.use(express.json());

// on Heroku machine an env variable is called "NODE_ENV" --> 'production'
if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors());
}

const PORT = process.env.PORT || 2000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});