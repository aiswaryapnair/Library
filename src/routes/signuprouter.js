const express = require("express");
const signuprouter =express.Router();
const userdata=require('../model/signupdata')
function router(nav){


signuprouter.get('/',function(req,res){
    res.render('signup',{
      nav,
    title:"Library"

});
  });
   



return signuprouter;
}
module.exports =router;