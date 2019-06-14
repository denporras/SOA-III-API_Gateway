const express = require('express');
const router = express.Router()

const users = require('./users')

const activities = require('./activities')
const calendars = require('./calendars')
const rooms = require('./rooms')
const services = require('./services')

const roomsReserve = require('./rooms-reserve')
const reservations = require('./reservations')


router.use((req, res, next) => {
    next()
})

router.use(users)
router.use(activities)
router.use(calendars)
router.use(rooms)
router.use(services)
router.use(roomsReserve)
router.use(reservations)

module.exports = router
