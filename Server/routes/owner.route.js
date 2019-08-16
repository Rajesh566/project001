// importing express module
var express = require('express');
var router = express.Router();
var multer = require('multer');
// importing mongoose module
var mongoose = require('mongoose');

var shortid = require('shortid');
// importing schema file 
var OwnerCollection = require('../models/owner.schema');


// assinging model to mySchema variable
var OwnerSchema =  OwnerCollection.Schema;
var loginschema = OwnerCollection.Login;
var BikeSchema = OwnerCollection.BikeSchema;
// importing bcrypt 
var bcrypt = require('bcrypt');
const saltRounds = 10;



// creating get api to retrieve students information form db
router.get('/getStudents',function(req,res){

    // mySchema is model of your db
    // find is used to retrieve data from db
    OwnerSchema.find(function(err,result){
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



// post api to insert data
router.post('/ownersignup',multer({ dest: './public/uploads/'}).single('ownerimg') ,function(req,res){
    // creating object for our model
    var data = new OwnerSchema();
    // assigning data to our model
    data.firstname = req.body.firstname;
    data.lastname = req.body.lastname;
    data.phonenumber = req.body.phonenumber;
    data.email = req.body.email;
    data._id=data.email;
    data.password = req.body.password;
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
                login.role= 'Owner'

                login.save((err,output) => {
                    if(err)
                    {

                    }
                    else
                    {
                        res.send({'msg':'Success'});
                    }
                })
                
            }
        })
      });
    
})

router.post('/addbike',multer({ dest: './public/uploads/'}).single('bikeimg') ,function(req,res){
    // creating object for our model
    if(req.body.BikeModel== ''|| req.body.Modelno== ''|| req.body.Contactno== '' || req.body.Ownerid== ''){
        res.status(400).send("PLease enter all fields");
    }
    var data = new BikeSchema();
    
   // assigning data to our model
  data.BikeModel = req.body.BikeModel;
  data.Modelno = req.body.Modelno;
  data.Contactno = req.body.Contactno;
  data.Bikepic = req.file.filename;
  data.Ownerid = req.body.Ownerid;
  data.Bikeid = shortid.generate();
  data.Location = req.body.Location;
console.log(data);
data.save(function(err,result){
    if(err)
    {
        res.send('Failed to Insert data')
    }
    else
    {
        res.send({'msg':'Success'});
    }
})
    
})



router.post('/profile',(req,res)=> {
    var email = req.body.email;
    OwnerSchema.find({'email':email},(err,result) => {
        if(err)
        {
            res.json({'msg':'Failed'})
        }
        else
        {
            res.json({'msg':result})
        }
    })
})

router.post('/getbikedetails',function(req,res,next){

    BikeSchema.find({'Ownerid':req.body.Ownerid},function(err,response){

        if(err)
        {
            res.send({'msg':'Failed'})
        }
        else
        {
            res.json({'msg':response})
        }

    })

});

router.post('/search',function(req,res,next){

    BikeSchema.find({'Location':req.body.location},function(err,response){

        if(err)
        {
            res.send({'msg':'Failed'})
        }
        else
        {
            res.json({'msg':response})
        }

    })

});
// exporting our router
module.exports = router;