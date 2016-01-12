const mongoose = require('mongoose');

const vidSchema = new mongoose.Schema({
	title: String,
	player: String,
	yesVotes: Number,
	noVotes: Number,
	officialCall: Boolean,
	vidURL: String
})

vidSchema.methods.addVote = (bool) => {
	if (bool) this.yesVotes++;
	else this.noVotes++;
	return this.save();
}

export default mongoose.model('Vid', vidSchema);