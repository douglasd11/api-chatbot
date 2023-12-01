const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemarol = new schema({
    id: Number,
    nombre: String,
    descripcion: String,
    precio: String,
    stock: String,
    imagen: String,
    categoria: String
})

const ModeloProducto = mongoose.model('productosE', schemarol)
module.exports = router

router.post('/agregarProducto', (req, res) => {
    
    const nuevoproducto = new ModeloProducto({
        id: req.body.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
    })

    nuevoproducto.save()
    res.send('guardado correctamente')
})


router.get('/obtenerProductos', async (req, res) => {

    const doc = await ModeloProducto.find()
    res.send(doc)
})

router.put('/actualizarProducto', async (req, res) => {

    await ModeloProducto.findOneAndUpdate({id: req.body.id}, {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
    })

    console.log('Actualizando prod')
    
    res.send('actualizado correctamente')
})

router.delete('/borrarProducto', async (req, res) => {
    
    await ModeloProducto.findOneAndDelete({id: req.body.id})
    res.send('Eliminado correctamente')
})