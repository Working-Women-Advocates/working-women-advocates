'use strict'

const db = require('APP/db')
const User = require('../db/models/user')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

	// get all advocates
	.get('/advocates', (req, res, next) =>
		User.findAll({
			where: {
				role: 'advocate'
			}
		})
		.then(advocates => res.json(advocates))
		.catch(next))

	// get all users
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))

	// make new user
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))

	// get one user
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
