const express = require('express')
const {engine} = require('express-handlebars')
const app = express()

const productos = []

app.set('views', './hbs_views')
app.set('view engine', '.hbs')

app.use('/', express.static("public"))
app.use(express.urlencoded ({ extended: true }))


app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    })

)


app.get('/productos', (req, res) => {
    res.render('main', {productos: productos})
})


app.post('/productos', (req, res) => {
    const {title, price, thumbail} = req.body
    productos.push({title, price, thumbail})
})


app.listen(8080, () => {
    console.log('Servidor levantado y escuchando!')
})

