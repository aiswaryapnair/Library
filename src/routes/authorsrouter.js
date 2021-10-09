const express = require("express");
const authorsrouter =express.Router();
function router(nav){
var authors=[
    {
        author:"Kiran Desai",
        country:"India",
        dob:" 3 September 1971",
        img:"Desai.jpg"

    },
    {
        author:"William Shakespeare",
        country:"UK",
        dob:"15 April 1564",
        img:"Shakespeare.jpg"

    },
    {
        author:"chetan bhagat",
        country:"India",
        dob:"22 April 1974",
        img:"chetan.jpg"

    },
    {
        author:"J. K. Rowling",
        country:"British",
        dob:"31 july 1965",
        img:"jk.jpg"

    },
    {
        author:"Benyamin ",
        country:"India",
        dob:"1971",
        img:"Benyamin.jpg"

    }
    
]

authorsrouter.get('/',function(req,res){
    res.render('authors',{
                  nav,
                title:"Library",authors

    });
});
authorsrouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('author',{
        nav,
        title:"Library",author:authors[id]
});
});
return authorsrouter;
}
module.exports =router;