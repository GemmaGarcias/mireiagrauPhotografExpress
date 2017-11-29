const Message = require('../../models/Message')

function addMessage(req, res) {
  const { name, email, message} = req.body

  const newmessage = new Message({ name, email, message})
  newmessage.save()
    .then( result => res.json({result}))
    .catch( err => res.status(500).json({ msg: err }) )
}

module.exports = addMessage