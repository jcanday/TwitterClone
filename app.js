const express = require('express')
const path = require('path') 
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
dotenv.config()

const app = express()
connectDB()




app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.listen(process.env.PORT, () => {
    console.log(`Port Number = ${process.env.PORT}`)
}) 


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

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