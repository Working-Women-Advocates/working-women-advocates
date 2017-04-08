'use strict'

// don't delete db - needed to avoid Sequelize race condition
const db = require('APP/db') // eslint-disable-line no-unused-vars
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/issues', require('./issues'))
  .use('/volunteers', require('./volunteers'))
  .use('/feedback', require('./feedback'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
