const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.listen(port, () => {
    console.log(`Port Number = ${port}`)
}) 

app.get('/',(req,res)=>{
    res.render('pages/index')
})

app.get('/profile',(req,res)=>{
    res.render('pages/profile',{title:'Profile'})
})

app.get('/login',(req,res)=>{
    res.render('pages/login',{title:'Profile'})
})

app.get('/register',(req,res)=>{
    res.render('pages/register',{title:'Profile'})
})

app.get('/user',(req,res)=>{
    res.render('pages/user',{title:'Profile'})
})

app.use((req,res,next)=>{
    console.log("Timestamp :", Date())
    next()
}, (req,res,next)=>{
    console.log('This is the next function called above')
    next()
})