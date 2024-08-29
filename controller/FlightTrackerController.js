const axios = require('axios');
const Flight = require('../model/FlightModel'); //  استيراد نموذج Flight


const apiKey = '4b7db8af473ff012d44b3ba68e241482'; // Replace with your actual API key
const apiUrl = 'https://api.aviationstack.com/v1/flights';

async function getFlights(req, res) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
      },
    });

    if (response.status === 200) {
      console.log('Flights data:', response.data);
      res.status(200).json(response.data); // Send only the data

    } else {
      console.error('Error fetching flights data:', response.data);
      res.status(response.status).json({ error: response.data }); // Send error details
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' }); // Handle general errors
  }
}


async function searchFlights(req, res) {
  try {
    const flightDate = req.body.flightDate; //  الحصول على تاريخ الرحلة من جسم الطلب

    if (!flightDate) {
      return res.status(400).json({ error: 'تاريخ الرحلة مطلوب' }); //  التحقق من صحة التاريخ
    }

    //  الحصول على جميع البيانات من API
    const allFlightsResponse = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
      },
    });

    if (allFlightsResponse.status !== 200) {
      console.error('Error fetching all flights data:', allFlightsResponse.data);
      return res.status(allFlightsResponse.status).json({ error: allFlightsResponse.data }); 
    }

    //  فلترة البيانات حسب التاريخ
    const filteredFlights = allFlightsResponse.data.data.filter(flight => {
      return flight.flight_date === flightDate;
    });

    res.status(200).json(filteredFlights); 
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' }); 
  }
}



module.exports = {
  getFlights,
  searchFlights,
};