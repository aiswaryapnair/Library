const express = require("express");
const addbookroutes =express.Router();
function router(nav){


addbookroutes.get('/',function(req,res){
    res.render('addbook',{
                  nav,
                title:"Library",

    });
});


return addbookroutes;
}
module.exports =router;