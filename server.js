const express = require("express");
const server = express();
const path = require('path');
const fs = require('fs');

server.use("/", express.static('./build'));
server.use("/users", express.static('./build'));
server.use("/users/:id", express.static('./build'));
server.use("/products", express.static('./build'));
server.use("/products/:id", express.static('./build'));
server.use("/reporting_departments", express.static('./build'));
server.use("/departmental_indicators", express.static('./build'));

server.use('/api/users/:id/total',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/table.ts'));
    let content = '';
    file.on('data', (data)=>{
        content = content + data.toString();
    })
    file.on('end', ()=>{
        const table = JSON.parse(content);
        res.json(table[req.params.id].total);
    })
});

server.use('/api/users/:id/chart',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/userChart.ts'));
    let content = '';
    file.on('data', (data)=>{
        content = content + data.toString();
    })
    file.on('end', ()=>{
        const chart = JSON.parse(content);
        res.json(chart[req.params.id]);
    })
});

server.use('/api/users/:id/table',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/table.ts'));
    let content = '';
    file.on('data', (data)=>{
        content = content + data.toString();
    })
    file.on('end', ()=>{
        const table = JSON.parse(content);
        res.json(table[req.params.id].data);
    })
});

server.use('/api/users/:id',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/users.ts'));
    let fileContent = '';
    file.on('data', (data)=>{
        fileContent = fileContent + data.toString();
    })
    file.on('end', () => {
        const users = JSON.parse(fileContent);
        const id = req.params.id;
        const user = users.find(u => u.id === id);
        res.end(JSON.stringify(user));
    })
});

server.use('/api/products/:id/chart',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/productChart.ts'));
    let content = '';
    file.on('data', (data)=>{
        content = content + data.toString();
    })
    file.on('end', ()=>{
        const chart = JSON.parse(content);
        res.json(chart[req.params.id]);
    })
});

server.use('/api/products/:id',(req, res) => {
    const file = fs.createReadStream(path.join(__dirname, './src/mock/products.ts'));
    let fileContent = '';
    file.on('data', (data)=>{
        fileContent = fileContent + data.toString();
    })
    file.on('end', () => {
        const products = JSON.parse(fileContent);
        const id = req.params.id;
        const product = products.find(u => u.id === id);
        res.end(JSON.stringify(product));
    })
});

server.use('/api/users',(req, res) => {
    res.sendFile(path.join(__dirname, './src/mock/users.ts'))
});

server.use('/api/departments',(req, res) => {
    res.sendFile(path.join(__dirname, './src/mock/departments.ts'))
});

server.use('/api/products',(req, res) => {
    res.sendFile(path.join(__dirname, './src/mock/products.ts'))
});

server.listen(3000, () => {
    console.log('Server is running')
})