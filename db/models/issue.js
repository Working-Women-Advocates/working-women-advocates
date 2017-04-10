'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Issue = db.define('issues', {
  contact_method: {
    type: Sequelize.ENUM('Email', 'Phone', 'SMS Text', 'Skype', 'Other')
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  industry: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  // Delete below until 50 and replace with more general?
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
    type: Sequelize.BOOLEAN,
    defaultValue: false
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
  // To be deleted
  description: Sequelize.STRING,
  company: {
    type: Sequelize.STRING
  },
  branch: {
    type: Sequelize.STRING
  },
  department: {
    type: Sequelize.STRING
  },
  supervisor: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'open'
  },
  urgent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Issue
