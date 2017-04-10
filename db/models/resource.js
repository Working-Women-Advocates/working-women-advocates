const Sequelize = require('sequelize')
const db = require('APP/db')

// Join values: Athena ID, resource entity ID, note ID

const Resource = db.define('resources', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  follow_up_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Resource
