const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: new mongoose.Schema.Types.ObjectId,
  username: {type:String, require:true},
  password: {type:String, require:true},
  name: {type:String, require:true},
  date: Date,
  image: String,
})

module.exports = mongoose.model("User",userSchema);
