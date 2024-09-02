const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = 3000;
app.use(express.json());

const option = {
  definition: {
  openapi: '3.0.0',
  info: {
    title: 'Trip Plan API',
    version: '1.0.0',
    description: 'API for managing trip plans',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Update this with your server URL
    },
  ],
},
apis: ['./route/*.js'],
}
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/flight", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const nodemailer = require("nodemailer");
const cors = require('cors');



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const authRoute = require("./route/authRoute");
const FlightTrackerRoute = require("./route/FlightTrackerRoute");
const FindHotelsRoute = require("./route/FindHotelsRoute");
const NoteRoute = require("./route/NoteRoute");
const TourGuideRoute = require("./route/TourGuideRoute");
const TripPlanRoute = require("./route/TripPlanRoute");
const ServicesRoute = require("./route/ServicesRoute");
const CountryRoute = require("./route/CountryRoute");
const CityRoute = require("./route/CityRoute");
const BestHotelsRoute = require("./route/BestHotelsRoute");
const FindCarsRoute = require("./route/FindCarsRoute");
const swaggerJSDoc = require('swagger-jsdoc');
app.use('/user',authRoute);
app.use('/flight',FlightTrackerRoute);
app.use('/hotel',FindHotelsRoute);
app.use('/note',NoteRoute);
app.use('/tour',TourGuideRoute);
app.use('/tripplan',TripPlanRoute);
app.use('/services',ServicesRoute);
app.use('/country',CountryRoute);
app.use('/city',CityRoute);
app.use('/besthotels',BestHotelsRoute);
app.use('/cars',FindCarsRoute);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const spacs = swaggerJSDoc(option)
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(spacs)
  )

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});