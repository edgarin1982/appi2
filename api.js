const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controler')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://edgarin:260659@cluster1.ms0xt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')



app.get('/', user.list)

app.post('/', user.create )

app.get('/:id',user.get)

app.put('/:id', user.update)

app.patch('/:id', user.update)

app.delete('/:id', user.destroy)


app.get('*', (req, res )=>{
    res.status(404).send('Esta pagina No existe')
})
app.post('*', (req, res )=>{
    res.status(404).send('Esta pagina No existe')
})

app.listen(port, ()=>{
    console.log('iniciando la aplicación');
})