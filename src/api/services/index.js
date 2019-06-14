const express = require('express');
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.get('/enservices', (req, res) => {
  api.get('/enservices').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.get('/esservices', (req, res) => {
  api.get('/esservices').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
