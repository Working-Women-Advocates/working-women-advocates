'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

// Applies to WWA feedback via form on the site - NOT resource feedback

const Feedback = db.define('feedback', {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  name: {
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
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  referrer: {
    type: Sequelize.ENUM('twitter', 'facebook', 'medium', 'friend', 'engine', 'other')
  },
  other_referrer: {
    type: Sequelize.STRING
  },
  date_contacted: {
    type: Sequelize.DATE
  }
}, {
  hooks: {
    beforeCreate: function (feedback, options) {
      if (feedback.referrer === 'other' && !feedback.other_referrer) {
        return Sequelize.Promise.reject('No referrer specified!')
      }
    }
  }
})

module.exports = Feedback
