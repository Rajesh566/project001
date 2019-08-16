// importing express module
var express = require('express');
var router = express.Router();
var multer = require('multer');
// importing mongoose module
var mongoose = require('mongoose');

// importing schema file 
var UserSchema = require('../models/userschema');
var LoginModel = require('../models/owner.schema');
var loginschema = LoginModel.Login;


// assinging model to mySchema variable
var User =  UserSchema.Schema;

// importing bcrypt 
var bcrypt = require('bcrypt');
const saltRounds = 10;

// // mongodb url
// var url = 'mongodb://127.0.0.1:27017/Miracle';

// mongoose.connect(url);

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', function(){
//   console.log("Error connecting to Database");	
//   });
 
//   // to get notification if connected to db
// db.on('open',function(){	
//   console.log("Database Connected");	
//   });

// creating get api to retrieve students information form db
router.get('/getUsers',function(req,res){

    // mySchema is model of your db
    // find is used to retrieve data from db
    User.find(function(err,result){
        if(err)
        {
            res.send('Failed to fetch data');
        }
        else
        {
            res.send(result);
        }
    })
})

// post api for checking login functionality
router.post('/login',function(req,res){
    
    // mySchema is model of your db
    // find is used to retrieve data from db
    // we are passing email to our find method to fetch the information
    loginschema.find({'email':req.body.email},function(err,result){
        if(err)
        {
            res.send({'msg':'Failed to fetch data'})
            
        }
        else
        {
            // checking condition if we get user data
            if(result.length > 0)
            {
               
                // comparing the user entered password and encrypted password from database
                // result[0].password is encrypted password from database
                bcrypt.compare(req.body.password,result[0].password , function(err, data) {
                    // data == true
                    // checking for matching the password if data == true our password is matched
                    if(data == true)
                    {
                        res.send({'msg':'Login Success','response' : result})
                        
                    }
                    else
                    {
                        res.send({'msg':'Invalid password'});
                        
                    }
                });
            }
            else
            {
                res.send({'msg':'User not found'});
                
            }
        }
    })
})

// post api to insert data
router.post('/usersignup',multer({ dest: './public/uploads/'}).single('userimg') ,function(req,res){
    // creating object for our model
    var data = new User();
    // assigning data to our model
    data.firstname = req.body.firstname;
    data.lastname = req.body.lastname;
    data.phonenumber = req.body.phonenumber;
    data.email = req.body.email;
    data._id =data.email;
    data.password = req.body.password;
    data.licenseno = req.body.licenseno;
    // data.licensepic = req.file.filename;
    data.adharno = req.body.adharno;
    // data.adharpic = req.file.filename;
    data.profilepic = req.file.filename;
    data.state = req.body.state;
    data.area = req.body.area;
console.log(data);
    // encrypting our password
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        // assigning encrypted password to our model
        data.password = hash;

        // data.save function is used to store our data in db
        data.save(function(err,result){
            if(err)
            {
                res.send('Failed to Insert data')
            }
            else
            {

                var login = new loginschema();
                login.email = data.email;
                login.password = data.password;
                login._id = data.email;
                login.role= 'User'

                login.save((err,output) => {
                    if(err)
                    {

                    }
                    else
                    {
                        res.send({'msg':'Success'});
                    }
                })
                // res.send({'msg':'Success'});
            }
        })
      });
    
})

// exporting our router
module.exports = router;