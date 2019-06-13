const express = require('express');
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.get('/enactivities', (req, res) => {
  api.get('/enactivities', req.body).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.get('/esactivities', (req, res) => {
  api.get('/esactivities', req.body).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
