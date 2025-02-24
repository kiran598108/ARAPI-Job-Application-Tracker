const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, default: 'applied' },
  dateApplied: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);