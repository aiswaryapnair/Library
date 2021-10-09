const express = require("express");
const loginrouter =express.Router();
function router(nav,nav2){


loginrouter.get('/',function(req,res){
    res.render('login',{
                  nav,nav2,
                title:"Library",

    });
});


return loginrouter;
}
module.exports =router;