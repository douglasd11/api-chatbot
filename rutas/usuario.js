const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemausuario = new schema({
    id: Number,
    usuario: String,
    clave: String
})

const ModeloUsuario = mongoose.model('usuariosE', schemausuario)
module.exports = router

router.post('/agregarUsuario', (req, res) => {
    
    const nuevousuario = new ModeloUsuario({
        id: req.body.id,
        usuario: req.body.usuario,
        clave: req.body.clave
    })

    nuevousuario.save()
    res.send('guardado correctamente')
})

router.get('/obtenerUsuarios', async (req, res) => {

    const doc = await ModeloUsuario.find()
    res.send(doc)
})


router.put('/actualizarUsuario', async (req, res) => {
    
    await ModeloUsuario.findOneAndUpdate({id: req.body.id}, {
        usuario: req.body.usuario,
        clave: req.body.clave
    })
    
    res.send('actualizado correctamente')
})

router.delete('/borrarUsuario', async (req, res) => {
    
    await ModeloUsuario.findOneAndDelete({id: req.body.id})
    res.send('Eliminado correctamente')
})