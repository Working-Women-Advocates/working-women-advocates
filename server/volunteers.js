'use strict'

const Volunteer = require('APP/db/models/volunteer')

module.exports = require('express').Router()

  // get all volunteers - just for admin
  .get('/', (req, res, next) =>
    Volunteer.findAll()
    .then(volunteers => res.json(volunteers))
    .catch(next))

  // new volunteer
  .post('/', (req, res, next) =>
    Volunteer.create(req.body)
    .then(volunteer => res.status(201).json(volunteer))
    .catch(next))

  // show one volunteer
  .get('/:id', (req, res, next) =>
    Volunteer.findById(req.params.id)
    .then(volunteer => res.json(volunteer))
    .catch(next))
