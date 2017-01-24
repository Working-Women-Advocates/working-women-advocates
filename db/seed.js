const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {username: 'Rachel', first_name: 'Rachel', last_name: 'Schmurb', email: 'rachel@example.com', password: '1234', role: 'admin'},
  {username: 'Michelle Obama', first_name: 'Michelle', last_name: 'Obama', email: 'michelle@example.com', password: '1234', role: 'advocate'},
  {username: 'Anita Borg', first_name: 'Anita', last_name: 'Borg', email: 'anita@example.com', password: '1234', role: 'advocate'},
  {username: 'Joan Clarke', first_name: 'Joan', last_name: 'Clarke', email: 'joan@example.com', password: '1234', role: 'advocate'}
], user => db.model('users').create(user))

const seedIssues = () => db.Promise.map([
  {username: 'ChelseaManning', contact_method: 'Email', email: 'chelsea@example.com', description: 'sexism and exclusion', advocate_id: 2},
  {username: 'SuperGirl', contact_method: 'Skype', skype: 'supergirl', description: 'sexual harrasment'},
  {username: 'Lois Lane', contact_method: 'SMS Text', text: '555-555-5554', description: 'discrimination'},
  {username: 'Beyonce', contact_method: 'Other', other: 'whatsapp', description: 'sexism', advocate_id: 2},
  {username: 'Taylor', contact_method: 'Phone', best_time: 'weekday evenings Pacific', phone: '555-555-5555', description: 'harassment'},
  {username: 'Kesha', contact_method: 'Other', other: 'viber', description: 'assault', status: 'closed'}
], issue => db.model('issues').create(issue))

const seedVolunteers = () => db.Promise.map([
  {username: 'Wanda Sykes', email: 'wanda@example.com', interest: 'to help heal others'},
  {username: 'Gloria Steinem', email: 'gloria@example.com', interest: 'to get training in advocacy'},
  {username: 'Grace Hopper', email: 'grace@example.com', interest: 'to give back'}
], volunteer => db.model('volunteers').create(volunteer))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIssues)
  .then(issues => console.log(`Seeded ${issues.length} issues OK`))
  .then(seedVolunteers)
  .then(volunteers => console.log(`Seeded ${volunteers.length} volunteers OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
