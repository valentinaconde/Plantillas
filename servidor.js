const express = require('express')

const app = express()
const userRouter = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', userRouter)
app.use('/', express.static("public"))

app.listen(8080, () => {
    console.log('Servidor levantado y escuchando!')
})

let id = 1

userRouter.get('/', (req, res) => {
    res.send({ productos: listaProductos})
})

userRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const producto = listaProductos.find(producto => producto.id == id)
    if(!producto) res.status(404).send({error: "producto no encontrado"})
    else res.send(producto)
})

userRouter.post('/', (req, res) => {
    const producto = req.body
    id++
    producto.id = id
    listaProductos.push(producto)
    res.send({productos : listaProductos})
})

userRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const producto = req.body
    const index = listaProductos.findIndex(producto => producto.id == id)
    listaProductos[index] = producto
    if(!listaProductos[index]) res.status(404).send({error: "producto no encontrado"})
    else res.send({productos : listaProductos})
})

userRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = listaProductos.findIndex(producto => producto.id == id)
    const productoEliminado = listaProductos.splice(index, 1)
    if(!productoEliminado) res.status(404).send({error: "producto no encontrado"})
    else res.status(200).send({mensaje: "producto eliminado correctamente"})
})
