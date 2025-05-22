// services/contactService.js

const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

/**
 * Service for handling contact form API requests
 * This provides a reusable layer for API communication
 */
class ContactService {
    /**
     * Submit contact form data to the API
     * @param {Object} contactData - Form data
     * @param {string} contactData.firstname - First name
     * @param {string} contactData.lastname - Last name
     * @param {string} contactData.company - Company name (optional)
     * @param {string} contactData.email - Email address
     * @param {string} contactData.message - Message content
     * @returns {Promise<Object>} API response
     */
    static async submitContactForm(contactData) {
      try {
        const response = await fetch(`${VITE_API_URL}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(contactData),
          credentials: 'same-origin' // Important for CSRF protection if enabled
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          // Transform error response to a standardized format
          throw {
            message: data.message || 'An error occurred',
            errors: data.errors || [],
            status: response.status
          };
        }
  
        return data;
      } catch (error) {
        // Handle network errors or other exceptions
        if (!error.status) {
          console.error('Network error:', error);
          error.message = 'Network error. Please check your connection.';
        }
        
        throw error;
      }
    }
  }
  
  export default ContactService;