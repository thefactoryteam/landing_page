// services/contactService.js

import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

class BookingService {
  /**
 * Submit booking form data to the API
 * @param {Object} bookingData - Form data for workspace booking
 * @returns {Promise<Object>} API response
 */
  static async submitBookingRequest(bookingData) {
    try {
      const response = await axios.post(`${API_URL}/book-now`, bookingData)

      return response?.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(message, {
                autoClose: 8000,
              });
        } else {
            // Handle any other kind of error
            toast.error("An unexpected error occurred.");
        }
        return false;
    }
  }
}

export default BookingService;