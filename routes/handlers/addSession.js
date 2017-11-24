const Session = require('../../models/Session')

function addSession(req, res) {
  const { name, detail, gallery} = req.body
  const date = new Date()

  const session = new Session({ name, detail, gallery, date })
  session.save()
    .then( result => res.json({result}))
    .catch( err => res.status(500).json({ msg: err }) )
}

module.exports = addSession