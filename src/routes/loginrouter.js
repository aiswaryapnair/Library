const express = require("express");
const session =require('express-session');

const loginrouter =express.Router();
const userdata=require('../model/signupdata');

function router(nav1){


loginrouter.get('/',function(req,res){
    res.render('login',{
                  
               nav1, title:"Library",

    });
});
loginrouter.post('/valid', async(req,res)=>{
  // const email=req.params.email; 
  
  const email=req.body.email;
  const password=req.body.psw;
  if(email=='admin' && password=='12345'){
    req.session.user='admin';
    finduser=req.session.user;
    // res.send({status:true});
    console.log(req.session.user)
         
res.status(200).render('home',{
  
  finduser,title:"library"
  
});
  }
  else{
  useremail= await userdata.findOne({email:email})
         if(useremail.password===password){
          req.session.user='user';
          finduser= req.session.user
console.log(useremail);
console.log(req.session.user)   
res.status(200).render('home',{
  
  finduser, title:"library"
  
});}
  }
if(useremail==0){
  res.send("not")
}


// catch(err){
//   res.send(err);
// }


//try closing    



    });
  

return loginrouter;
}
module.exports =router;