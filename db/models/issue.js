'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Issue = db.define('issues', {
  username: Sequelize.STRING,
  contact_method: {
    type: Sequelize.ENUM('Email', 'Phone', 'Skype', 'Other')
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  phone: {
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
