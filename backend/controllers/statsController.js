const Booking = require('../models/Booking');

// @desc    Get dashboard statistics
// @route   GET /api/stats
exports.getStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    
    // Static data for demo (could be made dynamic)
    const stats = {
      totalAppointments: totalBookings,
      professionals: 500,
      avgRating: 4.9,
      satisfiedCustomers: 9850
    };

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};