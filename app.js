//avance-table.html view
//modal.html - Referencia -view
//404.html - Vista - view 
//input.html - referencia - view
//html.html - Vista - View

//assets public

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const puerto = process.env.PORT || 3000;
const cors = require('cors')

const app=express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/index',(req,res)=>{
    res.render('index');
});

app.get('/categorias',(req,res)=>{
    res.render('categorias');
});

app.get('/table-bootstrap-basic',(req,res)=>{
    res.render('table-bootstrap-basic');
});


app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(puerto,()=>{
    console.log('El servidor esta corriendo en el puerto', puerto)
});