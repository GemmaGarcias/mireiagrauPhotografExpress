const Session = require('../../models/Session')

function putImages (req, res) {
	const {name, url} = req.body
	const {id} = req.params
	const date = new Date()
  Session.findByIdAndUpdate(id, {
  	$addToSet:{'img':{name, url}}, 
    $set: {date}},
    { new: true })
  	.then(img => { res.json({ img, msg: 'friend added properly!' }) })
  	.catch(error => { res.status(500).json({ error, msg: 'problems adding date' }) })
}

module.exports = putImages
