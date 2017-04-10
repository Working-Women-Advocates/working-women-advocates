const Sequelize = require('sequelize')
const db = require('APP/db')

// Join values: advocate ID, ally ID, Athena ID

const Note = db.define('notes', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Note
