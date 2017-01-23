const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {username: 'Rachel', first_name: 'Rachel', last_name: 'Schmurb', email: 'rachel@example.com', password: '1234', role: 'admin'},
  {username: 'Michelle Obama', first_name: 'Michelle', last_name: 'Obama', email: 'michelle@example.com', password: '1234', role: 'advocate'}
], user => db.model('users').create(user))

const seedIssues = () => db.Promise.map([
  {username: 'ChelseaManning', contact_method: 'Email', email: 'chelsea@example.com', description: 'sexism and exclusion', advocate_id: 2},
  {username: 'SuperGirl', contact_method: 'Skype', skype: 'supergirl', description: 'sexual harrasment'},
  {username: 'Lois Lane', contact_method: 'SMS Text', text: '555-555-5554', description: 'discrimination'},
  {username: 'Beyonce', contact_method: 'Other', other: 'whatsapp', description: 'sexism', advocate_id: 2},
  {username: 'Taylor', contact_method: 'Phone', best_time: 'weekday evenings Pacific', phone: '555-555-5555', description: 'harassment'},
  {username: 'Kesha', contact_method: 'Other', other: 'viber', description: 'assault', status: 'closed'}
], issue => db.model('issues').create(issue))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIssues)
  .then(issues => console.log(`Seeded ${issues.length} issues OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
