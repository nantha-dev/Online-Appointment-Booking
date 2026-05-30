const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create new service (Admin)
// @route   POST /api/services
exports.createService = async (req, res) => {
  try {
    const { name, description, icon, availableSlots, duration, price } = req.body;

    const service = await Service.create({
      name,
      description,
      icon,
      availableSlots,
      duration,
      price
    });

    res.status(201).json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};