const express = require('express')
const CharacterController = require('./controllers/CharacterController')

const routes = express.Router()

routes.get('/characters', CharacterController.index)

module.exports = routes