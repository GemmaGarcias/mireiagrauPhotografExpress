const Session = require('../../models/Session')

function addSession(req, res) {
  const { name, detail, gallery, img } = req.body
  const date = new Date()

  const session = new Session({ name, detail, img, gallery, date })
  session.save()
    .then( result => res.send(result))
    .catch( err => res.status(500).json({ msg: err }) )
}

module.exports = addSession