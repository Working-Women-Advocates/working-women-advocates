'use strict'

const db = require('APP/db')
const User = require('./user')
const { expect } = require('chai')

describe('User', () => {
  before('wait for the db', () => db.didSync)

  let createdUser

  beforeEach(() => {
    createdUser = User.build({
      name: 'Jane Doe',
      email: 'jane@jane.com',
      wwaEmail: 'jane@workingwomenadvocates.org',
      password: '1234',
      team: ['Web'],
      position: ['Developer'],
      city: 'Austin',
      state: 'TX',
      country: 'US',
      slackHandle: 'janedoe',
      image: 'someURL',
      resume: 'anotherURL'
    })
  })

  afterEach(() => User.truncate({ cascade: true }))

  describe('attributes definition', () => {
    it('ensures name cannot be null', () => {
      createdUser.name = null
      return createdUser.validate()
      .then(user => {
        expect(user).to.be.an.instanceOf(Error)
        expect(user.message).to.contain('name cannot be null')
      })
    })

    it('ensures name cannot be empty', () => {
      createdUser.name = ''
      return createdUser.validate()
      .then(user => {
        expect(user).to.be.an.instanceOf(Error)
        expect(user.message).to.contain('Validation notEmpty failed')
      })
    })
  })

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      createdUser.save()
      .then(user => user.authenticate('1234'))
      .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      createdUser.save()
      .then(user => user.authenticate('not ok'))
      .then(result => expect(result).to.be.false))
  })
})
