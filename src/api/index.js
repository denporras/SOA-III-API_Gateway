const express = require('express');
const router = express.Router()

const users = require('./users')

const activities = require('./activities')
const calendars = require('./calendars')
const rooms = require('./rooms')
const services = require('./services')


router.use((req, res, next) => {
    next()
})

router.use(users)
router.use(activities)
router.use(calendars)
router.use(rooms)
router.use(services)

module.exports = router
