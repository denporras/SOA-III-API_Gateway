const express = require('express')
const router = express.Router()
const adapter = require('../adapter')
const { contentEndpoint } = require('../../config')

const api = adapter(contentEndpoint)

router.get('/posts', (req, res) => {
  api.get('/posts').then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.get('/posts/mine', (req, res) => {
  const { user, token } = req.headers
  api.get('/posts/mine', { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.post('/posts', (req, res) => {
  const { user, token } = req.headers
  api.post('/posts', req.body, { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

router.delete('/posts/:id', (req, res) => {
  const { user, token } = req.headers
  const { id } = req.params
  api.delete(`/posts/${id}`, { headers: { user, token } }).then(resp => {
    res.send(resp.data)
  }).catch((error) => {
    res.send({
      success: false,
      error: 'Connection error!'
    })
  })
})

module.exports = router
