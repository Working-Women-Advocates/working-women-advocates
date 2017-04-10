const Sequelize = require('sequelize')
const db = require('APP/db')

const ResourceEntity = db.define('resource_entities', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  website: {
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
  partner: {
    // Are they a partner resource?
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  blacklisted: {
    // Have they been blacklisted from us recommending them to Athenas?
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  notes: {
    // Anything else that has been recorded/we should know about them.
    type: Sequelize.TEXT
  }
})

module.exports = ResourceEntity
