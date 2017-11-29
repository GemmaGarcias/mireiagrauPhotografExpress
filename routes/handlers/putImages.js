const Session = require('../../models/Session')

function putImages (req, res) {
	const {imageLink, name} = req.body
	const {id} = req.params
	console.log(id)
	const date = new Date()
  Session.findByIdAndUpdate(id, {
  	$addToSet:{'img':{name:name, url:imageLink}}, 
    $set: {date}},
    { new: true })
  	.then(img => { res.json({ img, msg: 'friend added properly!' }) })
  	.catch(error => { res.status(500).json({ error, msg: 'problems adding date' }) })
}

module.exports = putImages
