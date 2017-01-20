'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Issue = db.define('issues', {
  description: Sequelize.STRING
})

module.exports = Issue
