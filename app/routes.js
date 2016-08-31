module.exports = function(app) {

	require('./models/Candidate.js');
	var mongoose = require('mongoose');
	var CandidateModel = mongoose.model("Candidate");

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/candidate/all', function(req, res) {
		CandidateModel.find({}, function(err, docs) {
			if (!err){
				console.log(docs);
				res.send({state: err ? 'error': 'success', data: err ? err : docs});
			} else {throw err;}
		});
	});

	app.post('/candidate', function(req, res) {

		var candidate = new CandidateModel(req.body);

		candidate.save(function(err, candidate) {

			if(err) {
				res.status(500);
			} else {
				res.status(201);
			}

			res.send({state: err ? 'error': 'success', data: err ? err : candidate});
		});
	});

};