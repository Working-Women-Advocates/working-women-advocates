const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {username: 'Rachel', email: 'rachel@example.com', password: '1234', role: 'admin'},
  {username: 'Michelle Obama', email: 'michelle@example.com', password: '1234', role: 'advocate'},
  {username: 'ChelseaManning', email: 'chelsea@example.com', password: '1234', role: 'ww'},
  {username: 'SuperGirl', email: 'supergirl@example.com', password: '1234', role: 'ww'},
  {username: 'Lois Lane', email: 'loislane@example.com', password: '1234', role: 'ww'},
], user => db.model('users').create(user))

const seedIssues = () => db.Promise.map([
  {description: 'sexism and exclusion', working_woman_id: 3},
  {description: 'sexual harrasment', working_woman_id: 4},
  {description: 'discrimination', working_woman_id: 5}
], issue => db.model('issues').create(issue))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIssues)
  .then(issues => console.log(`Seeded ${issues.length} issues OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
