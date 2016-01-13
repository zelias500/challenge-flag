const mongoose = require('mongoose');
import _ from 'lodash';

const vidSchema = new mongoose.Schema({
	title: String,
	player: String,
	yesVotes: {type: Number, default: 0},
	noVotes: {type: Number, default: 0},
	officialCall: Boolean,
	vidURL: String,
	vidID: String
})

vidSchema.methods.addVote = function (bool) {
	if (bool) this.yesVotes++;
	else this.noVotes++;
	return this.save();
}

vidSchema.statics.findRandom = function () {
	return this.find({}).then(vids => {
		let idx = _.random(0, vids.length-1);
		return vids[idx];
	})
}

export default mongoose.model('Vid', vidSchema);