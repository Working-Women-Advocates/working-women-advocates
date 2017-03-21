'use strict'

const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  wwaEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
      // notEmpty: true <-- ???
    }
  },
  // Should we support OAuth? If not, we should make password required.
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL,
  phone_number: Sequelize.STRING,
  team: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    // Can be: Admin, Advocates, Allies, Board, Case Managers, Fundraising, Legal, Social Media, Web
    validate: {
      notEmpty: true
    }
  },
  position: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
      notEmpty: true
    }
  },
  city: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  // What about other countries? E.g. Canada has provinces...
  state: Sequelize.STRING,
  country: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  slackHandle: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  image: {
    // Link to Google Drive URL
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  resume: {
    // Link to Google Drive URL
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  volunteerReason: {
    // Should this be required?
    type: Sequelize.TEXT
  },
  dateContractSigned: Sequelize.DATE,
  status: {
    type: Sequelize.ENUM('Pending', 'Active', 'Retired', 'Under Review'),
    default: 'Pending',
    validate: {
      notEmpty: true
    }
  }
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
