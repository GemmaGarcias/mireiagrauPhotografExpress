const Session = require('../../models/Session')

function getSessions (req, res) {
  Session.find()
    .then( Session => res.json(Session))
}

module.exports = getSessions