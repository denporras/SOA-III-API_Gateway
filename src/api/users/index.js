const express = require('express')
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.post('/users/login', (req, res) => {
  api.post('/users/login', req.body).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.post('/users/logout', (req, res) => {
  const { user, token } = req.headers
  api.post('/users/logout', req.body, { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.post('/users', (req, res) => {
  api.post('/users', req.body).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
