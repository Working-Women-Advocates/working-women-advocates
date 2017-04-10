'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Volunteer = db.define('volunteers', {
  username: {
    type: Sequelize.STRING,
    // validate: {
    //   notEmpty: true
    // }
  },
  email: {
    type: Sequelize.STRING
  },
  interest: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM('to review', 'available', 'not available'),
    defaultValue: 'to review',
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Volunteer
