const Message = require('../../models/Message')

function deleteMessage (req, res) {
	const {id} = req.params
	return Message.findByIdAndRemove(id)
		.then(response =>
			res.status(200).json({ msg: `msg removed properly`})
			)
}

module.exports = deleteMessage