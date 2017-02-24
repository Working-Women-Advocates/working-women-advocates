const app = require('APP'), { env } = app
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('APP/db/models/user')
const auth = require('express').Router()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(
  (id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user)
      })
      .catch(err => {
        done(err)
      })
  }
)

// Local passport configuration

auth.post('/local/login', (req, res, next) =>
  passport.authenticate('local', {
    successRedirect: '/'
  })(req, res, next)
)

passport.use(new LocalStrategy(
  (email, password, done) => {
    User.findOne({ where: { email } })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Login incorrect' })
        }
        return user.authenticate(password)
          .then(ok => {
            if (!ok) {
              return done(null, false, { message: 'Login incorrect' })
            }
            done(null, user)
          })
      })
      .catch(done)
  }
))

auth.get('/whoami', (req, res) => res.send(req.user))

auth.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth

