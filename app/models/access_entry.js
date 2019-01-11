let mongoose = require('mongoose')

let entrySchema = new mongoose.Schema({
    time: { type : Date, default: Date.now },
    ip: String,
    repo_name: String
});
let model = mongoose.model('AccessEntry', entrySchema);

module.exports = model;
