'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Feedback = db.define('feedback', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  // e-mail not validated here because email is not required
  // email should be checked for validity on front-end
  email: Sequelize.STRING,
  name: Sequelize.STRING,
  message: Sequelize.TEXT
})

module.exports = Feedback
