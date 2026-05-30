export const validateBookingForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }

  if (!formData.service) {
    errors.service = 'Please select a service';
  }

  if (!formData.date) {
    errors.date = 'Please select a date';
  }

  if (!formData.timeSlot) {
    errors.timeSlot = 'Please select a time slot';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};