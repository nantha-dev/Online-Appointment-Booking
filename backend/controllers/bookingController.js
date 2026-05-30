const Booking = require('../models/Booking');
const Service = require('../models/Service');

// @desc    Create new booking
// @route   POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, service, date, timeSlot } = req.body;

    // Check if service exists
    const serviceExists = await Service.findById(service);
    if (!serviceExists) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    // Check if slot is already booked
    const existingBooking = await Booking.findOne({
      service,
      date,
      timeSlot
    });

    if (existingBooking) {
      return res.status(400).json({ 
        success: false, 
        message: 'This time slot is already booked. Please choose another slot.' 
      });
    }

    const booking = await Booking.create({
      name,
      email,
      phone,
      service,
      date,
      timeSlot
    });

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all bookings (Admin)
// @route   GET /api/bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('service', 'name');
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get available time slots for a service on a specific date
// @route   GET /api/bookings/available-slots
exports.getAvailableSlots = async (req, res) => {
  try {
    const { serviceId, date } = req.query;

    if (!serviceId || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please provide serviceId and date'
      });
    }

    // Get service with its slots
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Get all booked slots for this service on this date
    const bookedSlots = await Booking.find({
      service: serviceId,
      date: date
    }).select('timeSlot');

    const bookedTimeSlots = bookedSlots.map(booking => booking.timeSlot);

    // Filter available slots
    const availableSlots = service.availableSlots.filter(
      slot => !bookedTimeSlots.includes(slot)
    );

    res.status(200).json({
      success: true,
      data: availableSlots
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};