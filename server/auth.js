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

auth.post('/local/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return next(err)
    if (!user) return res.json({})
    req.logIn(user, function (err) {
      if (err) { return next(err) }
      return res.json(user)
    })
  })(req, res, next)
})

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
