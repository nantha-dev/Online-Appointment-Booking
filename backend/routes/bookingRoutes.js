const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getAvailableSlots
} = require('../controllers/bookingController');

router.route('/')
  .post(createBooking)
  .get(getAllBookings);

router.get('/available-slots', getAvailableSlots);

module.exports = router;