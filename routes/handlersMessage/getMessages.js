const Message = require('../../models/Message')

function getMessages (req, res) {
  Message.find()
    .then( session => res.json(session))
}

module.exports = getMessages