var mongoose = require('mongoose');

//defining Schema for userCollection 
var UserSchema = mongoose.model('user_collection', {
  firstname: String,
  lastname: String,
  phonenumber:String,
  email: String,
  _id:String,
  password: String,
  licenseno:String,
  // licensepic:String,
  adharno:String,
  // adharpic:String,
  profilepic : String,
  state: String,
  area:String
});

// exporting our schema
module.exports.Schema=UserSchema;
