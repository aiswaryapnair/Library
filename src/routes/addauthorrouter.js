const express = require("express");
const addauthorrouter =express.Router();
function router(nav){


addauthorrouter.get('/',function(req,res){
    res.render('addauthor',{
                  nav,
                title:"Library",

    });
});


return addauthorrouter;
}
module.exports =router;