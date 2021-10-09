var uname=document.getElementById("uname");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var psw=document.getElementById("psw");
var repsw=document.getElementById("rpsw");
let namemsg=document.getElementById("namemsg");
 let passalt=document.getElementById("passalt");
 let error= document.getElementById("error");
 let msg=document.getElementById("errormsg"); //ph                              
 var confirmmsg=document.getElementById("confirmmsg");

function validate(){
    if(uname.value==0){
    uname.style.border="solid 2px red";
    namemsg.innerHTML="Username can't be empty";
    // namemsg.style.color="#ff34aa";
  }
  if(email.value==0){
    email.style.border="solid 2px red";
  error.innerHTML="Email Adress can't be empty"
  // error.style.color="#ff34aa";
  }
  if(phone.value==0){
    phone.style.border="solid 2px red";
  msg.innerHTML="Contact Number can't be empty";
  // msg.style.color="#ff34aa";
  }
  if(psw.value==0){
    // password.style.border="solid 2px red";
  passalt.innerHTML="Password can't be empty";
  // passalt.style.color="#ff34aa";
  }
  if(repsw.value==0){
    repsw.style.border="solid 2px red";
    confirmmsg.innerHTML="Retype password can't be empty";
    // confirmmsg.style.color="#ff34aa";
  return false;
  }
  return true;
  }
   

function validatename(){
    // let uname=document.getElementById("name");
    let namemsg=document.getElementById("namemsg");
    let regexp=/^[a-zA-Z ]+$/;
    if(regexp.test(uname.value)){
    namemsg.innerHTML="";
    uname.style.border="";
    return true;
    
    }
    else if(uname.value.length==0){
    namemsg.innerHTML="";
    uname.style.border="";
    return;
    }
    else{
    namemsg.innerHTML="Name must contain alphabets only!";
    namemsg.style.color="red";
    uname.style.border=" solid 2px red";
    return false;
    }
    }
    
    
function validateEmail()
{

// let email= document.getElementById("email");
let error= document.getElementById("error");


// let regexp =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(regexp.test(email.value))
{

  error.innerHTML="Valid";
  // error.style.color="green";
  error.innerHTML="";
  email.style.border="";
  return true;
}
else if (email.value.length == 0) {
  error.innerHTML="";
  email.style.border="";

return;
}
else
{

  error.innerHTML=" Not a valid Email address!";
  error.style.color="red";
  email.style.border=" solid 2px red";
  return false;
}
}
function validatePhone(){ 
    // let phone=document.getElementById("phone");
    let msg=document.getElementById("errormsg");                               
    // let regexp=/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let regexp=/^((([0-9]{3})([0-9]{3})([0-9]{4}))||(([0-9]{3})[-]{1}([0-9]{3})[-]{1}([0-9]{4}))||(([0-9]{3})[ ]{1}([0-9]{3})[ ]{1}([0-9]{4}))||(([0-9]{3})[.]{1}([0-9]{3})[.]{1}([0-9]{4})))$/;
  
  
  
  if(regexp.test(phone.value))
  {
    msg.innerHTML="Valid Number Format";
    msg.style.color="green";
    msg.innerHTML="";
   phone.style.border="";
  
    return true;
  }
  else if (phone.value.length == 0) {
    msg.innerHTML="";
    phone.style.border="";
  return;
  }
  else{
    msg.innerHTML="Number must Contain 10 digits & should in XXX XXX XXXX or XXX.XXX.XXXX or XXX-XXX-XXXX format";
    msg.style.color="red";
    phone.style.border=" solid 2px red";
  // msg.innerHTML="";
    return false;
  
  }
  }
  //password matching
  function check()
    {
        // var psw=document.getElementById("password");
        // var repsw=document.getElementById("retypepass");
  
        var confirmmsg=document.getElementById("confirmmsg");
       
        if (repsw.value.length == 0) {
            confirmmsg.innerHTML="";
            repsw.style.border="";
          
          return;
        }
        if(psw.value!==repsw.value){
            confirmmsg.innerHTML="Password and Retype password does not match!";
            confirmmsg.style.color="red";
            repsw.style.border=" solid 2px red";
            return false;
        }
         
        else{
            confirmmsg.innerHTML="matching";
            confirmmsg.innerHTML="";
            repsw.style.border="";
            return true;
  
        }
        
    }
    function validauthor(){
      let author=document.getElementById("auth");
      let msg=document.getElementById("msg");
      let regexp=/^[a-zA-Z ]+$/;
      if(regexp.test(author.value)){
      msg.innerHTML="";
      author.style.border="";
      return true;
      
      }
      else if(author.value.length==0){
      msg.innerHTML="";
      author.style.border="";
      return;
      }
      else{
      msg.innerHTML="Name must contain alphabets only!";
      msg.style.color="red";
      author.style.border=" solid 2px red";
      return false;
      }
      }
      function validcon(){
        let author=document.getElementById("con");
        let msg=document.getElementById("emsg");
        let regexp=/^[a-zA-Z ]+$/;
        if(regexp.test(author.value)){
        msg.innerHTML="";
        author.style.border="";
        return true;
        
        }
        else if(author.value.length==0){
        msg.innerHTML="";
        author.style.border="";
        return;
        }
        else{
        msg.innerHTML="Language must contain alphabets only!";
        msg.style.color="red";
        author.style.border=" solid 2px red";
        return false;
        }
        }
    function validatebook(){
      let author=document.getElementById("author");
      let msg=document.getElementById("msg");
      let regexp=/^[a-zA-Z ]+$/;
      if(regexp.test(author.value)){
      msg.innerHTML="";
      author.style.border="";
      return true;
      
      }
      else if(author.value.length==0){
      msg.innerHTML="";
      author.style.border="";
      return;
      }
      else{
      msg.innerHTML="Name must contain alphabets only!";
      msg.style.color="red";
      author.style.border=" solid 2px red";
      return false;
      }
      }
      function validategener(){
        let gener=document.getElementById("gener");
        let emsg=document.getElementById("emsg");
        let regexp=/^[a-zA-Z ]+$/;
        if(regexp.test(author.value)){
        emsg.innerHTML="";
        gener.style.border="";
        return true;
        
        }
        else if(gener.value.length==0){
        emsg.innerHTML="";
        gener.style.border="";
        return;
        }
        else{
        emsg.innerHTML="gener must contain alphabets only!";
        emsg.style.color="red";
        gener.style.border=" solid 2px red";
        return false;
        }
        }
        function validatelang(){
          let lng=document.getElementById("lng");
          let msg=document.getElementById("lmsg");
          let regexp=/^[a-zA-Z ]+$/;
          if(regexp.test(lng.value)){
          msg.innerHTML="";
          lng.style.border="";
          return true;
          
          }
          else if(lng.value.length==0){
          msg.innerHTML="";
          lng.style.border="";
          return;
          }
          else{
          msg.innerHTML="Language must contain alphabets only!";
          msg.style.color="red";
          lng.style.border=" solid 2px red";
          return false;
          }
          }
