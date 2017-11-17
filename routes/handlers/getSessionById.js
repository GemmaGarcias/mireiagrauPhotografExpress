const Session = require('../../models/Session')

function getSessionById (req, res) {
	const {id} = req.params
  	Session.find({_id: id},{img : 1, name : 1, gallery: 1})
    	.then( session => res.json(session))
    	.catch( err => res.status(500).json({ msg: err }) )
}

module.exports = getSessionById