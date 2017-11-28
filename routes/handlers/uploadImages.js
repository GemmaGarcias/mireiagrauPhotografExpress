// const Session = require('../../models/Session')

// function uploadImages (req, res) {
// 	const {id} = req.params
// 	const {imageLink}=req
// 	return Session.findByIdAndUpdate(id, {
// 		$addToSet:{'img':{imageLink}}}, 
//     	{ new: true })
// 		.then(img => { res.json({ img, msg: 'friend added properly!' }) })
//   		.catch(error => { res.status(500).json({ error, msg: 'problems adding date' }) })
// }
// module.exports = uploadImages
