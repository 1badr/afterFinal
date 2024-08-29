const axios = require('axios');
const FormData = require('form-data');
const http = require('https');
const request = require('request');

const apiKey = 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6'; // Replace with your actual API key
const apiUrl = 'https://hotels4.p.rapidapi.com'; // Base URL

async function getHotels(req, res) {
  try {
    // Set up headers
    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": apiKey, // Use your actual API key
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "useQueryString": true
    };

    // Make the API request
    const response = await axios.get(apiUrl, {
      params: {
        q: 'abc' // Your search query
      },
      headers: headers
    });

    if (response.status === 200) {
      console.log('Hotels data:', response.data);
      res.status(200).json(response.data); // Send only the data

    } else {
      console.error('Error fetching hotels data:', response.data);
      res.status(response.status).json({ error: response.data }); // Send error details
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
      res.status(500).json({ error: 'Request failed' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = {
  getHotels,
};