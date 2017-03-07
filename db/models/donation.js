'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Donation = db.define('donations', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  amount: {
    type: Sequelize.INTEGER, // in U.S. Cents
    allowNull: false
  },
  method: {
    type: Sequelize.ENUM('stripe', 'check', 'other')
  },
  thanked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  dedication: {
    type: Sequelize.STRING
  }
})

module.exports = Donation
