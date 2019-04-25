var express = require('express')
var app = express()
 
app.set('view engine' , 'ejs')
app.use(express.static("./public"))


//rendering my landing page
app.get('/', function (req, res) {
  res.render('about')
})
//rendering my projects page
app.get('/', function (req, res) {
  res.render('project')
})
//rendering my experience page
app.get('/', function (req, res) {
  res.render('xp')
})
///rendering my contact page
app.get('/', function (req, res) {
  res.render('contact')
})

 
app.listen(3000,
console.log("server is live on port 3000")
    )
