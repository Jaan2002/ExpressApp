//Experiement
//
const path= require('path');
const express= require('express');
const hbs= require('hbs');
//
const app=express();

const publicDirectory= path.join(__dirname,'../public');
const viewPath= path.join(__dirname,'../templates/views');
const partialsPath= path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectory));

app.get('',(req,res)=>{
    res.render('home',{
         title: 'Elon Musk',
         name: '~Jaanvi '});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:"About: Elon Musk",name:"~Jaanvi"})
})
app.get('/contactUs',(req,res)=>{
    res.render('contactUs',{title:"Contact Us",contact:'call 105-110-1402 ',name:"~Jaanvi"})
})
app.get('/about/*',(req,res)=>{
    res.render('404',{title:"404 Page",errorMsg:"About page Not Found!",name:"~Jaanvi"})
})


app.get('*',(req,res)=>{
    res.render('404',{title:"404 Page",errorMsg:"page Not Found!",name:"~Jaanvi"})
})

app.listen(3000,()=>{console.log("Server is listening port no 3000")})