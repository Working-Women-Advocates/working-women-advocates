'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Feedback = db.define('feedback', {
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
  message: {
    type: Sequelize.TEXT
  },
  dateContacted: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  referrer: {
    type: Sequelize.ENUM('twitter', 'facebook', 'medium', 'friend', 'engine', 'other')
  }
})

module.exports = Feedback
