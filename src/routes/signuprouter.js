const express = require("express");
const signuprouter =express.Router();
function router(nav){


signuprouter.get('/',function(req,res){
    res.render('signup',{
                  nav,
                title:"Library",

    });
});


return signuprouter;
}
module.exports =router;