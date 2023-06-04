const settings = require('../settings')
const express = require('express');
const cors = require('cors');
const router = express.Router();

router.get('/plaffy-bird', cors(), (request, response) => {
    try
    {
        template = settings.server.templates_dir + 'games/' + 'plaffy-bird.html'
        response.status(200).render(template)
    }
    catch(e)
    {
        template = settings.server.templates_dir + 'forbidden.html'
        response.status(200).render(template)
    }
});

router.get('/petris', cors(), (request, response) => {
    try
    {
        template = settings.server.templates_dir + 'games/' + 'petris.html'
        response.status(200).render(template)
    }
    catch(e)
    {
        template = settings.server.templates_dir + 'forbidden.html'
        response.status(200).render(template)
    }
});

router.get('/spacecraft', cors(), (request, response) => {
    try
    {
        template = settings.server.templates_dir + 'games/' + 'spacecraft.html'
        response.status(200).render(template)
    }
    catch(e)
    {
        template = settings.server.templates_dir + 'forbidden.html'
        response.status(200).render(template)
    }
});

module.exports = router