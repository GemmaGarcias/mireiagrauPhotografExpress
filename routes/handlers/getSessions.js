const Session = require('../../models/Session')

function getSessions (req, res) {
  Session.find()
    .then( session => res.json(session))
}

module.exports = getSessions