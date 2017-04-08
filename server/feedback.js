'use strict'

const db = require('APP/db')
const Feedback = db.model('feedback')

module.exports = require('express').Router()

  // post feedback
  .post('/', (req, res) => {
    console.log('feedback form posted: ', req.body)
    res.sendStatus(200)
  })
