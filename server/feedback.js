'use strict'

const db = require('APP/db')
const Feedback = db.model('feedback')

module.exports = require('express').Router()

  // post feedback
  .post('/', (req, res, next) => {
    Feedback.create(req.body)
    .then(feedback => res.status(201).json(feedback))
    .catch(next)
  })
