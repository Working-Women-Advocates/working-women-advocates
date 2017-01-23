'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Issue = db.define('issues', {
  username: {
   type: Sequelize.STRING,
   validate: {
    notEmpty: true
   }
  },
  contact_method: {
    type: Sequelize.ENUM('Email', 'Phone', 'SMS Text', 'Skype', 'Other')
  },
  email: {
    type: Sequelize.STRING
    // can't do without requiring
    // validate: {
    //   isEmail: true
    // }
  },
  phone: {
    type: Sequelize.STRING
  },
  best_time: {
    type: Sequelize.STRING
  },
  timezone: {
    type: Sequelize.STRING
  },
  voicemail: {
    type: Sequelize.BOOLEAN
  },
  text: {
    type: Sequelize.STRING
  },
  skype: {
    type: Sequelize.STRING
  },
  other: {
    type: Sequelize.STRING
  },
  description: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'open',
    validate: {
      notEmpty: true
    }
  },
})

module.exports = Issue
