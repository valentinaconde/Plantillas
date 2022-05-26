const express = require('express')
const app = express()

const productos = []

app.set('views', './ejs_views')
app.set('view engine', 'ejs')

app.use('/', express.static("public"))
app.use(express.urlencoded ({ extended: true }))

app.get('/productos', (req, res) => {
    res.render('form', {productos})
})

app.post('/productos', (req, res) => {
    const {title, price, thumbail} = req.body
    productos.push({title, price, thumbail})
})

app.listen(8080, () => {
    console.log('Servidor levantado y escuchando!')
})