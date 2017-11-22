const Session = require('../../models/Session')

function removeSessionById (req, res) {
	const {id} = req.params
	return Session.findByIdAndRemove(id)
					.then(response =>
						res.status(200).json({ msg: `session w/ id ${id} removed properly`})
						)
}

module.exports = removeSessionById