var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema(
	{
		name: String,
		clientName: String,
		payRate: Number,
		startDate: String,
		isSixMonthsOrMore: String,
		billRate: Number,
		phone: Number,
		email: String
	}
);

module.exports =  mongoose.model("Candidate", candidateSchema);