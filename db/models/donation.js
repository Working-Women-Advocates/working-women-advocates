const Sequelize = require('sequelize')
const db = require('APP/db')

const Donation = db.define('donations', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
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
  amount: {
    type: Sequelize.INTEGER, // in U.S. Cents
    allowNull: false
  },
  method: {
    type: Sequelize.ENUM('stripe', 'check', 'other')
  },
  other_method: {
    // If method was 'other', what method?
    type: Sequelize.STRING
  },
  thank_you_email_date: {
    // Date they were sent a thank you email
    type: Sequelize.DATE
  },
  public_thank_you_method: {
    // If they've indicated they want a public thank you, what method (e.g. Twitter, other things?)
    type: Sequelize.STRING
  },
  public_thank_you_name: {
    // If they've indicated they want a public thank you, what username/thing should we mention?
    type: Sequelize.STRING
  },
  public_thank_you_dedication: {
    // If they've indicated they want a public thank you, did they want to dedicate their donation to someone?
    type: Sequelize.STRING
  },
  public_thank_you_date: {
    // If they've indicated they want a public thank you, on what date were they thanked?
    type: Sequelize.DATE
  }
})

module.exports = Donation
