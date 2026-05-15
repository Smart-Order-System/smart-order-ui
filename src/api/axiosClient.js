// axiosClient.js
// A single shared Axios instance used by all API calls in the app.
// This means we only set the base URL and headers once, here —
// not in every individual API call.

import axios from 'axios'

const axiosClient = axios.create({
  // Reads the URL from your .env file
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,  // cancel the request if it takes more than 10 seconds
})

// Response interceptor — runs on every response before it reaches your code
// Use this to handle errors globally instead of in every individual call
axiosClient.interceptors.response.use(
  response => response,  // success — just pass it through
  error => {
    // Log every API error in one place
    const status  = error.response?.status
    const message = error.response?.data?.error || error.message

    console.error(`API Error ${status}: ${message}`)

    // Re-throw so individual callers can still catch it if needed
    return Promise.reject(error)
  }
)

export default axiosClient