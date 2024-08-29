const tripplan = require('../model/TripPlan');

const createTripPlan = async (req, res) => {
  try {
    const newTripPlan = new tripplan(req.body);
    await newTripPlan.save();
    res.status(201).json({ tripPlan: newTripPlan._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTripPlan = async (req, res) => {
  try {
    const { id } = req.params;
    await tripplan.findByIdAndDelete(id);
    res.json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateTripPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTripPlan = await tripplan.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTripPlan);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


const getTripPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const tripPlanById = await tripplan.findById(id);
    res.status(200).json(tripPlanById);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trip plan' });
  }
};

const getTripRemainingDays = async (req, res) => {
  try {
    const { id } = req.params;
    const tripPlanById = await tripplan.findById(id);

    if (!tripPlanById) {
      return res.status(404).json({ error: 'Trip plan not found' });
    }

    const { startDate, endDate } = tripPlanById;
    const currentDate = Math.ceil((startDate - endDate ))

    const remainingDays = currentDate;

    res.status(200).json({ remainingDays });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getMoney = async (req, res) => {
  try {
    const { id } = req.params;
    const tripPlanById = await tripplan.findById(id);

    if (!tripPlanById) {
      return res.status(404).json({ error: 'Trip plan not found' });
    }

    const { budget, expenses } = tripPlanById;
    const currentMoney = Math.ceil((budget - expenses ))

    const getMoney = currentMoney;

    res.status(200).json({ getMoney,budget,expenses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTripPlan = async (req, res) => {
  
  try {
    const notes = await tripplan.find();

    res.status(200).json({notes})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTripPlanBy = async (req, res) => {
    try {
      const trips = await tripplan.findById(req.params.id);
      res.status(200).json(trips);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trip' });
    }
  };


  const getTripPlansForUser = async (req, res) => {

      const userId = req.params.id;
    
      try {
        const blogs = await tripplan.find({ userId: userId });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };


module.exports = {
  createTripPlan,
  deleteTripPlan,
  updateTripPlan,
  getTripPlanById,
  getTripRemainingDays,
  getMoney,
  getAllTripPlan,
  getTripPlanBy,
  getTripPlansForUser
};