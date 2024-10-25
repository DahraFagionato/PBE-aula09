const express = require('express')
const router = express.Router()

const clientes = require('./CONTROLLER/controller_clientes')
const estacionamento = require('./CONTROLLER/controller_estacionamento')
const quartos = require('./CONTROLLER/controller_quartos')
const reservas = require('./CONTROLLER/controller_reservas')
const telefone = require('./CONTROLLER/controller_telefone')

router.post('/clientes', clientes.create)
router.get('/clientes', clientes.read)
router.get('/clientes/:id', clientes.create)
router.post('/clentes/:id', clientes.read)

router.post('/estacionamento', estacionamento.create)
router.get('/estacionamento', estacionamento.read)
router.get('/estacionamento/:id', estacionamento.create)
router.post('/estacionamento/:id', estacionamento.read)

router.post('/quartos', quartos.create)
router.get('/quartos', quartos.read)
router.get('/quartos/:id', quartos.create)
router.post('/quartos/:id', quartos.read)

router.post('/reservas', reservas.create)
router.get('/reservas', reservas.read)
router.get('/reservas/:id', reservas.create)
router.post('/reservas/:id', reservas.read)

router.post('/telefone', telefone.create)
router.get('/telefone', telefone.read)
router.get('/telefone/:id', telefone.create)
router.post('/telefone/:id', telefone.read)

module.exports = router;