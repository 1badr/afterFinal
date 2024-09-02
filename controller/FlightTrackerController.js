const axios = require('axios');
const Flight = require('../model/FlightModel'); 


const apiKey = '4b7db8af473ff012d44b3ba68e241482'; 
const apiUrl = 'https://api.aviationstack.com/v1/flights';

const apiKeys = 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6'; 
const apiUrls = 'https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json';

async function getFlights(req, res) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
      },
    });

    if (response.status === 200) {
      res.status(200).json(response.data);

    } else {
      res.status(response.status).json({ error: response.data });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' }); 
  }
}

async function fetchHotels(req, res) {
  try {
    const response = await axios.get(apiUrls, {
      params: {
        query: req.query.query || 'San Francisco', 
        locale: 'en_US'
      },
      paramsSerializer: params => {
        return new URLSearchParams(params).toString(); 
      }
    });

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ error: response.data });
    }
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function searchFlights(req, res) {
  try {
    const flightDate = req.body.flightDate;
    if (!flightDate) {
      return res.status(400).json({ error: 'تاريخ الرحلة مطلوب' }); 
    }

    const allFlightsResponse = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
      },
    });

    if (allFlightsResponse.status !== 200) {
      return res.status(allFlightsResponse.status).json({ error: allFlightsResponse.data }); 
    }

    const filteredFlights = allFlightsResponse.data.data.filter(flight => {
      return flight.flight_date === flightDate;
    });

    res.status(200).json(filteredFlights); 
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' }); 
  }
}

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
  qs: {id: '1178275040'},
  headers: {
    'x-rapidapi-key': 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com'
  }
};


module.exports = {
  getFlights,
  searchFlights,
  fetchHotels
};