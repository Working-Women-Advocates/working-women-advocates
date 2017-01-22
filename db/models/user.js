'use strict'

const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  username: Sequelize.STRING,
  contact_method: {
    type: Sequelize.ENUM('email', 'phone', 'skype', 'other')
  },
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true
		}
  },
  phone: {
    type: Sequelize.INTEGER
  },
  skype: {
    type: Sequelize.STRING
  },
  other: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.ENUM('admin', 'advocate', 'ww')
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
})

function setEmailAndPassword(user) {
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
