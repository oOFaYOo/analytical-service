const express = require("express");
const path = require('path');
const server = express();

server.use(express.static('./build'));

// server.use((req, res) => {
//
// });

server.listen(3000, () => {
    console.log('Server is running')
})