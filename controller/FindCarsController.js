const request = require('request');
const axios = require('axios');

const fetchCars = async (req, res) => {
  const model = req.query.model || 'corolla'; 
  const totalCars = 100; 
  const promises = [];
  
  for (let i = 0; i < totalCars; i += 10) { 
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      qs: {
        model: model,
        limit: 10,  
        offset: i   
      },
      headers: {
        'x-rapidapi-key': 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };

    const fetchPromise = new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) return reject(error);
        
        const data = JSON.parse(body);
        if (data.message && data.message === "Too many requests") {
          return reject(new Error('Too many requests.'));
        }
        
        resolve(data);
      });
    });

    promises.push(fetchPromise);
      await new Promise(resolve => setTimeout(resolve, 1000));
  }

  try {
    const results = await Promise.all(promises);
    const allCars = results.flat(); 
    res.status(200).json(allCars); 
  } catch (error) {
    console.error('Error fetching cars:', error.message);
    res.status(500).json({ error: error.message });
  }
};

const apiKey = 'fae673538dmshf3866cf7b5709cbp1f16ebjsn816b5b5850b6';
const apiUrl = 'https://trawex-car-rental.p.rapidapi.com/book';

async function bookCar(req,res,rentalDetails) {
  const options = {
    method: 'POST',
    url: apiUrl,
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'trawex-car-rental.p.rapidapi.com',
      'Content-Type': 'application/json' 
    },
    data: rentalDetails 
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data); 

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  fetchCars,
  bookCar,
};