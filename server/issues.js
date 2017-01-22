'use strict'

const db = require('APP/db')
const Issue = db.model('issues')
const User = db.model('users')

const {mustBeLoggedIn, forbidden, secure} = require('./auth.filters')

module.exports = require('express').Router()

  // get all issues - just for admin
  .get('/', (req, res, next) =>
    Issue.findAll()
    .then(issues => res.json(issues))
    .catch(next))

  // get all issues not assigned to any advocates
  .get('/available/:id', (req, res, next) =>
    Issue.findAll({
      where: {
        advocate_id: null
      }
    })
    .then(issues => res.json(issues))
    .catch(next))

  //get all issues assigned to advocate logged in
  .get('/assignedToMe/:id', (req, res, next) =>
    Issue.findAll({
      where: {
        advocate_id: req.params.id
      }
    })
    .then(issues => res.json(issues))
    .catch(next))

  // make new issue
  .post('/', (req, res, next) =>
    Issue.create(req.body)
    .then(issue => res.status(201).json(issue))
    .catch(next))

  // show one issue
  .get('/:id', (req, res, next) =>
    Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(next))
