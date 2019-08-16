var mongoose = require('mongoose');

//defining Schema for userCollection 
var Schema = mongoose.model('owner_collection', {

  firstname: String,
  lastname: String,
  phonenumber:String,
  email: String,
  _id: String,
  password: String,
  profilepic : String,
  state: String,
  area:String
});

//bike schmea

var BikeSchema = mongoose.model('bikes_collection', {
  BikeModel : String,
      Modelno: String,
      Contactno: String,
      Bikepic: String,
      Ownerid:String,
      Bikeid:String,
      Location:String
});

//defining Schema for Login Collection 
var Login = mongoose.model('login_collection', {
 email:String,
 _id: String,
 password:String,
 role:String
});

// exporting our schema
module.exports.Schema=Schema;
module.exports.Login = Login;
module.exports.BikeSchema = BikeSchema;