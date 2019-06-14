const express = require('express');
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.get('/encalendars', (req, res) => {
  api.get('/encalendars').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.get('/escalendars', (req, res) => {
  api.get('/escalendars').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
