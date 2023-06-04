const settings = require('./settings')
const express = require('express');
const cors = require('cors');
const router = express.Router();

// pagina principal
router.get('/', cors(), (request, response) => {
  try {
    var html = settings.server.html_dir + 'index.html'
    response.status(200)
  } catch(e) {
    var html = settings.server.html_dir + 'forbidden.html'
    response.status(500)
    console.log(e);
  } finally {
    response.render(html)
  }
})

// quienes somos
router.get('/quienes-somos', cors(), (request, response) => {
  try {
    var html = settings.server.html_dir + 'aboutus.html'
    response.status(200)
  } catch(e) {
    var html = settings.server.html_dir + 'forbidden.html'
    response.status(500)
    console.log(e);
  } finally {
    response.render(html)
  }
})

// acerca del proyecto
router.get('/acerca-del-proyecto', cors(), (request, response) => {
  try {
    var html = settings.server.html_dir + 'aboutproject.html'
    response.status(200)
  } catch(e) {
    var html = settings.server.html_dir + 'forbidden.html'
    response.status(500)
    console.log(e);
  } finally {
    response.render(html)
  }
})


// login
router.get('/login', cors(), (request, response) => {
  try {
    var html = settings.server.html_dir + 'login.html'
    response.status(200)
  } catch(e) {
    var html = settings.server.html_dir + 'forbidden.html'
    response.status(500)
    console.log(e);
  } finally {
    response.render(html)
  }
})

router.get('/register', cors(), (request, response) => {
  try {
    var html = settings.server.html_dir + 'register.html'
    response.status(200)
  } catch(e) {
    var html = settings.server.html_dir + 'forbidden.html'
    response.status(500)
    console.log(e);
  } finally {
    response.render(html)
  }
})


module.exports = router