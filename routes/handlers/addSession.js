const Session = require('../../models/Session')

function addSession(req, res) {
  const { name, detail, gallery} = req.body

  const session = new Session({ name, detail, gallery})
  session.save()
    .then( result => res.json({result}))
    .catch( err => res.status(500).json({ msg: err }) )
}

module.exports = addSession