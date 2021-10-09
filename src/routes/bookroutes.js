const express = require("express");
const booksrouter =express.Router();
function router(nav){
var books=[
    {
        title:"Wings of Fire",
        author:"A.P.J.Abdul Kalam ",
        gener:"autobiography",
        lang:"English",
        publish:"1999",
        img:"merchant.jpg"

    },
    {
        title:"Harry Potter",
        author:"J. K. Rowling",
        gener:"Fantasy",
        lang:"English",
        publish:"26 June 1997",
        img:"harry.jpg"

    },
    {
        title:"Aatujeevitham",
        author:"Benyamin",
        gener:"Novel",
        lang:"Malayalam",
        publish:"15 July 2008",
        img:"adu.jpg"

    },
    {
        title:"Two state",
        author:"chetan bhagat",
        gener:"Novel",
        lang:"English",
        publish:"8 October 2009",
        img:"state.jpg"

    },
    {
        title:"The Inheritance of Loss",
        author:"Kiran Desai",
        gener:"  Novel",
        lang:"English",
        publish:"31 August 2006",
        img:"inheri.jpg"

    },
]

booksrouter.get('/',function(req,res){
    res.render('books',{
                  nav,
                title:"Library",books

    });
});
booksrouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('book',{
        nav,
        title:"Library",book:books[id]
});
});
return booksrouter;
}
module.exports =router;