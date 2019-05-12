const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

nunjucks.configure(path.resolve(__dirname, 'views'), {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['Thamires', 'Daniel', 'Jaime']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
