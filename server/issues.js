'use strict'

const db = require('APP/db')
const Issue = db.model('issues')

const {mustBeLoggedIn, forbidden, secure} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Issue.findAll()
    .then(issues => res.json(issues))
    .catch(next))
  .post('/', (req, res, next) =>
    Issue.create(req.body)
    .then(issue => res.status(201).json(issue))
    .catch(next))
  .get('/:id', mustBeLoggedIn, (req, res, next) =>
    Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(next))
