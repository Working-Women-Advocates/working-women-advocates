'use strict'

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Issue = require('./issue')
const Volunteer = require('./volunteer')
const Ally = require('./ally')
const Donation = require('./donation')
const Feedback = require('./feedback')

Issue.belongsTo(User, { as: 'advocate' })

module.exports = { User, Issue, Volunteer, Ally, Donation, Feedback }
