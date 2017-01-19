const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Rachel', email: 'rachel@example.com', password: '1234'},
  {name: 'Michelle Obama', email: 'michelle@example.com', password: '1234'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
