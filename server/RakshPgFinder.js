const express = require('express');
const db = require('./db');
const utils = require('./utils');
const multer = require('multer');

const upload = multer({dest: 'images/'});

const router = express.Router();



router.get('/RakshPgFinder', (request, response) => {
    const connection = db.connect();
    const statement = `select address, location, nearby, type,cost,thumbnail,facilities,gender,email,password,id from RakshPgFinder`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.get('/RakshPgFinder/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `select address, location, nearby, type,cost,thumbnail,facilities,gender,email,password,id from RakshPgFinder where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result[0]));
    })
});

router.post('/RakshPgFinder', (request, response) => {
    const {address,location,nearby,type,cost,thumbnail,facilities,gender,email,password} = request.body;
    const connection = db.connect();
    const statement = `insert into RakshPgFinder
            (address, location, nearby, type,cost,thumbnail,facilities,gender,email,password,id) values 
            ('${address}', '${location}', '${nearby}', '${type}','${cost}','${thumbnail}','${facilities}','${gender}','${email}','${password}','${id}')`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.put('/RakshPgFinder/:id', (request, response) => {
    const id = request.params.id;
    const {address, location, nearby, type,cost,thumbnail,facilities,gender,email,password} = request.body;
    const connection = db.connect();
    const statement = `update RakshPgFinder
        set
        address = '${address}',
            location = '${location}',
            nearby = '${nearby}',
            type = '${type}',
            cost = '${cost}',
            thumbnail = '${thumbnail}',
            facilities = '${facilities}',
            gender = '${gender}',
            email = '${email}',
            password = '${password}',
            id = '${id}'
           
        where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});

router.delete('/RakshPgFinder/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `delete from RakshPgFinder where id = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    })
});


router.post('/RakshPgFinder', upload.single('thumbnail'), (request, response) => {
    const {address, location, nearby, type,cost,thumbnail,facilities,gender,email,password} = request.body;
    const connection = db.connect();
    const statement = `insert into RakshPgFinder
            (address, location, nearby, type,cost,thumbnail,facilities,gender,email,password,id) values 
            ('${address}', '${location}', '${nearby}', '${type}', '${cost}', '${request.file.filename}', '${facilities}', '${gender}', '${email}', '${password}','${id})`;
    connection.query(statement, (error, result) => {
        connection.end();
        notification.send(() => {
            response.send(utils.createResponse(error, result));
        });
    })
});


module.exports = router;
