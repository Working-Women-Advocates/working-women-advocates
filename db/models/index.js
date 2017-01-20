'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Issue = require('./issue')

Issue.belongsTo(User, {as: 'advocate'})
Issue.belongsTo(User, {as: 'working_woman', foreignKey: {allowNull: false}})

module.exports = {User}
