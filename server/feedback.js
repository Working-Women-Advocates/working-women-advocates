'use strict'

const db = require('APP/db')
const Feedback = db.model('feedback')

module.exports = require('express').Router()

  // post feedback
  .post('/', (req, res, next) => {
    Feedback.create(req.body)
    .then(res.sendStatus(200))
    .catch(next)
  })
