const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





app.use(express.static('public'))
app.use('./css', express.static(__dirname, + '/public/css'))
app.use('./img', express.static(__dirname, + '/public/img'))
app.use('./js', express.static(__dirname, + '/public/js'))
app.use('./lib', express.static(__dirname, + '/public/lib'))
app.use('./scss', express.static(__dirname, + '/public/scss'))

app.set('view engine', 'ejs')

mongoose.connect("mongodb://localhost:27017/healthcare", {}).then(() => { console.log("mongodb connected") })
const Appoint = require('./appoint.js')

app.get("/", (req, res) => { res.render('index') })
app.get("/admin", (req, res) => { res.render('admin') })
app.get("/index", (req, res) => { res.render('index') })
app.get("/about", (req, res) => { res.render('about') })
app.get("/appointment", (req, res) => { res.render('appointment') })
app.get("/blog", (req, res) => { res.render('blog') })
app.get("/contact", (req, res) => { res.render('contact') })
app.get("/details", (req, res) => { res.render('details') })
app.get("/price", (req, res) => { res.render('price') })
app.get("/search", (req, res) => { res.render('search') })
app.get("/services", (req, res) => { res.render('services') })
app.get("/team", (req, res) => { res.render('team') })
app.get("/testimonials", (req, res) => { res.render('testimonials') })

app.post('/appointdata', async (req, res) => {
    const appointdb = new Appoint(req.body)
    await appointdb.save()
    res.render('index')
})

app.post('/admin',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    if( username =='admin' && password =='123'){
        res.render('Admin')
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))