const express = require('express')
const countries = require('./countries')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (res)  {
    res.send('Made by Darina')
})

app.listen(port, function () {
    console.log(`Приложение запущено на порте ${port}`)
})

app.get('/HW/countries', function (res) {
    const arr = countries.getAll().then(function (data) {
        res.json(data)
    })
    .catch(function (error)  { 
        console.log(error)
        res.status(404).send('Not found')
    })
})

app.get('/HW/countries/:id', function (req, res)  {
    const id = req.params.id
    const countries = countries.getOne(id).then(function (data) {
        res.json(data)
    })
    .catch(function (error)  {
        console.log(error)
        res.status(404).send('Not found')
    })
})

app.delete('/HW/countries/:id', function (req, res)  {
    const id = req.params.id
    const countries = countries.deleteCountry(id).then(function () {
        res.status(200).send('Deleted')
    })
    .catch(function (error)  {
        console.log(error)
        res.status(404).send('Not found')
    })
})

app.post('/HW/countries', function (req, res)  {
    if(!req.body) return response.sendStatus(400);
    const countries = countries.create(req.body).then(function () {
        res.status(200).send('Created')
    })
    .catch(function (error)  {
        console.log(error)
        res.status(500).send(error)
    });
})

app.put('/HW/countries', function (req, res)  {
    if(!req.body) return response.sendStatus(400);
    const countries = countries.create(req.body).then(function () {
        res.status(200).send('Updated')
    })
    .catch(function (error)  {
        console.log(error)
        res.status(500).send(error)
    });
})