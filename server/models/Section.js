const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// Define the Section schema
const sectionSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SubSection",
		},
	],
});

// Export the Section model
module.exports = mongoose.model("Section", sectionSchema);