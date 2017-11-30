const Message = require('../../models/Message')

function deleteMessage (req, res) {
	const {id} = req.params
	return Message.findByIdAndRemove(id)
		.then(response =>
			res.json({response})
			)
}

module.exports = deleteMessage