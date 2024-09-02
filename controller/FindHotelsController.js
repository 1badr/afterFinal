const axios = require('axios');
const FormData = require('form-data');
const http = require('https');
const request = require('request');

const apiKey = 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6'; 
const apiUrl = 'https://hotels4.p.rapidapi.com';

async function getHotels(req, res) {
  try {
    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": apiKey, 
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "useQueryString": true
    };

    const response = await axios.get(apiUrl, {
      params: {
        q: 'abc'
      },
      headers: headers
    });

    if (response.status === 200) {
      console.log('Hotels data:', response.data);
      res.status(200).json(response.data); 

    } else {
      console.error('Error fetching hotels data:', response.data);
      res.status(response.status).json({ error: response.data }); }
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      res.status(500).json({ error: 'Request failed' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = {
  getHotels,
};