'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Volunteer = db.define('volunteers', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  interest: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM('to review', 'available', 'not available'),
    defaultValue: 'to review'
  },
  start_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  responded_yet: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  responded_date: Sequelize.DATE,
  message: Sequelize.TEXT
})

module.exports = Volunteer
