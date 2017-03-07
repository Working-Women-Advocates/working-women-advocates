'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Ally = db.define('allies', {
  username: Sequelize.STRING,
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  job_title: Sequelize.STRING,
  company: Sequelize.STRING,
  industry: Sequelize.ARRAY(Sequelize.STRING),
  max_clients: Sequelize.INTEGER
}, {
  indexes: [
    { unique: false, fields: ['industry'] }
  ]
})

module.exports = Ally
