const mongoose = require('mongoose');

const PostSchema = new Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: string, required: true,},
    photo: { type: String, required: false },
    username: { author: String, required: true },
    catagories: {type: Array, required: false,}
  },{timestamp: true});

  module.exports = mongoose.model("Post", PostSchema);