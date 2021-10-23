const express=require('express');
const multer = require('multer');
var fs = require('fs');


const adminroute = express.Router();
const Bookdata=require('../model/Bookdata');
const Authordata=require('../model/Authordata');
const userdata=require('../model/signupdata');

function router(nav){
adminroute.get('/',function(req,res){
    res.render('addbooks',{
        nav,title:"Library"
    })
})


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' +file.originalname;
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage });

var type=upload.single('image');//for books image
var authorimg=upload.single('authimg');//for author img
var booktype=upload.single('imagebooks');//for edit books
var authtype=upload.single('imageauth');//for edit books

adminroute.post('/add',type,function(req,res){
  console.log(req.file);
  var item={
   title: req.body.title,
   author:req.body.author,
   genre: req.body.genre,
   language: req.body.lng,
   published: req.body.publish,
    image:req.file.filename
  }
  var book=Bookdata(item);
  book.save();//saving to db
  
  res.redirect("/books");
  
});

adminroute.post('/addauth',authorimg,function(req,res){
    console.log(req.file);
    var item2={
     author:req.body.author,
     country: req.body.country,
     dob: req.body.dob,
      image:req.file.filename
    }
    var author=Authordata(item2);
    author.save();//saving to db
    
    res.redirect('/authors');
    
  });
  
adminroute.post('/enter',function(req,res){
  var datas={
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    password:req.body.psw,
    role:"user"
  }
  var user=userdata(datas);
  user.save();
  res.redirect('/login');
});
 
//update booksdetails
adminroute.post('/editbooks',booktype,(req,res)=>{
  console.log(req.file);
  const id=req.body.bid;
  console.log(id)
 
    title= req.body.title;
    author=req.body.author;
    genre= req.body.genre;
     language= req.body.lng;
    published=req.body.publish
    image=req.file.filename;

  //  var 
  
//  var bookid=await Bookdata.findOne({_id:id})
try{
 Bookdata.updateOne({_id:id},{$set:{title:title,author:author,genre:genre,language:language,published:published,image:image}})  
 .then(function (req,res){
   
});
res.redirect("/books");
}
catch(err){
  console.log(err)
}
    // {$set:{genre:genre}},{$set:{language:language}},{$set:{published:published}}
    

  
      
});


//update author

adminroute.post('/editauthor',authtype,(req,res)=>{
  console.log(req.file);
  const id=req.body.bid;
  console.log(id)
 
    author= req.body.autho;
    country= req.body.country;
    dob=req.body.dob
    image=req.file.filename;

  //  var 
  
//  var bookid=await Bookdata.findOne({_id:id})
try{
 Authordata.updateOne({_id:id},{$set:{author:author,country:country,dob:dob,image:image}})  
 .then(function (req,res){
   
});
res.redirect("/authors");
}
catch(err){
  console.log(err)
}
    // {$set:{genre:genre}},{$set:{language:language}},{$set:{published:published}}
    

  
      
});

//delete
adminroute.get('/deletebooks/:bid',(req,res)=>{
  console.log(req.file);
  const id=req.params.bid;
  console.log("id"+id)
  
try{
 Bookdata.deleteOne({_id:id})  
 .then(function (req,res){
   
 });
 res.redirect("/books");
}
catch(err){
  console.log(err)
}
    // {$set:{genre:genre}},{$set:{language:language}},{$set:{published:published}}
    

     
      
});
adminroute.get('/deleteauthors/:bid',(req,res)=>{
  console.log(req.file);
  const id=req.params.bid;
  console.log("id"+id)
  
try{
 Authordata.deleteOne({_id:id})  
 .then(function (req,res){
   
 });
 res.redirect("/authors");
}
catch(err){
  console.log(err)
}
    // {$set:{genre:genre}},{$set:{language:language}},{$set:{published:published}}
    

     
      
});

return adminroute;
}
module.exports=router;