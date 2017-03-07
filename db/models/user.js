'use strict'

const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  username: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  // it may be worthwhile to change 'role' to an 'isAdmin' boolean
  //    and make advocate a team instead
  role: {
    type: Sequelize.ENUM('admin', 'advocate')
  },
  advocate_type: {
    type: Sequelize.ENUM('Therapy', 'Legal', 'Financial', 'Job Coach', 'General')
  },
  team: {
    type: Sequelize.ENUM('Dev', 'Social Media', 'Fundraising', 'Crowdsurfing'),
    allowNull: false
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL
}, {
  indexes: [{ fields: ['email'], unique: true }],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword
  },
  instanceMethods: {
    authenticate (plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
})

function setEmailAndPassword (user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err)
      user.set('password_digest', hash)
      resolve(user)
    })
  )
}

module.exports = User
