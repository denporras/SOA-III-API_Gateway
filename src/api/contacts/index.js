const express = require('express');
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.get('/encontacts', (req, res) => {
  api.get('/encontacts').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.get('/escontacts', (req, res) => {
  api.get('/escontacts').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
