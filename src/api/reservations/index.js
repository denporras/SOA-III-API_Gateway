const express = require('express');
const router = express.Router()
const adapter = require('../adapter')
const { reservationEndpoint } = require('../../config')

const api = adapter(reservationEndpoint)

router.get('/reservations', (req, res) => {
  const { user, token } = req.headers
  api.get('/reservations', { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.post('/reservations', (req, res) => {
  const { user, token } = req.headers
  api.post('/reservations', req.body, { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
