const express = require("express");
const homerouter =express.Router();
function router(nav){


homerouter.get('/',function(req,res){
    res.render('home',{
                  nav,
                title:"Library",

    });
});


return homerouter;
}
module.exports =router;