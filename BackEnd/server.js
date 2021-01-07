const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin1:admin1@cluster0-xok99.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    nation: String,
    position: String
})

const PlayerModel = mongoose.model('player', playerSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/players/', (req, res) => {

    PlayerModel.find((error, data) => {
        res.json({ players: data });
    })

})

app.get('/api/players/:id', (req, res) => {
    console.log(req.params.id);

    PlayerModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.delete('/api/players/:id', (req, res) => {
    console.log(req.params.id);

    PlayerModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/movies/:id', (req, res, next) => {
    console.log(req.params.id);

})

app.post('/api/players', (req, res) => {
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.nation);
    console.log(req.body.position);

    PlayerModel.create({
        name: req.body.name,
        nation: req.body.nation,
        position: req.body.position
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

