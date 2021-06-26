const mongoose = require('mongoose');

const CatagorySchema = new Schema({
    name: { type: String, required: true, },
  },{timestamp: true});

  module.exports = mongoose.model("Catagory", CatagorySchema);