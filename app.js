const express = require('express');
const session =require('express-session');
const app =new express();
const port=process.env.PORT || 8080;

app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:true,
    cookie:{secure:false}
}));





const sessioncheck=function(req,res,next){
    if(req.session.user=='admin'||req.session.user=='user'){
        next();
    }
    else
    {
        res.redirect('/login');
    }
}
// app.use(sessioncheck);

app.get('/logout'),function(req,res){
    req.session.destroy();
    res.redirect('/login');
}

var nav=[
   
    {
        link:'/books',name:"Books"
    },
    {
        link:'/authors',name:"Authors"
    },
    {
        link:'/addbook',name:"AddBook"
    },
    {
        link:'/addauthor',name:"AddAuthor"
    },
    {
        link:'/',name:"Logout"
    }
   
];

var nav1=[
    {
        link:'/',name:"Home"
    },
    {
        link:'/login',name:"Login"
    },
    {
        link:'/signup',name:"Sign Up"
    }
   
];

app.use(express.urlencoded({extended:true}));
const loginrouter=require('./src/routes/loginrouter')(nav1);

app.use('/login',loginrouter)
const homerouter=require('./src/routes/homerouter')(nav)
const booksrouter=require('./src/routes/bookroutes')(nav)
const authorsrouter=require('./src/routes/authorsrouter')(nav)
const signuprouter=require('./src/routes/signuprouter')(nav1)
const adminrouter=require('./src/routes/adminrouter')(nav)
const addbookroutes=require('./src/routes/addbookroutes')(nav)
const addauthorrouter=require('./src/routes/addauthorrouter')(nav)



// const app =new express();

app.set('view engine','ejs');
app.set('views',"./src/views");
app.use(express.static('./public'));


app.use('/home',homerouter)
app.use('/books',booksrouter)
app.use('/authors',authorsrouter)
app.use('/signup',signuprouter)
app.use('/addbook',addbookroutes)
app.use('/addauthor',addauthorrouter)
app.use('/admin',adminrouter)


app.get('/',function(req,res){
    res.render("index",{
      nav1,title:"Library"
    });
   

});
app.listen(port,()=>{console.log("server ready at"+port)});