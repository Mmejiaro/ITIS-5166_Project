const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: { type: String, required: [true, 'title is required'] },
    category: { type: String, required: [true, 'category is required'] },
    img: { type: String, required: [true, 'img url is required'] },
    hostName: { type: Schema.Types.ObjectId, ref:'User'},
    date: { type: String, required: [true, 'date of connection is required'] },
    startTime: { type: String, required: [true, 'start time is required'] },
    endTime: { type: String, required: [true, 'end time is required'] },
    loc: { type: String, required: [true, 'location is required'] },
    details: { type: String, required: [true, 'details are required'] },
},
{timestamps: true}
);

// collection name is connections
module.exports = mongoose.model('Connection', connectionSchema);