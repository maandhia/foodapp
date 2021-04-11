const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.YELP_TOKEN}`,
  },
});

// get restaurants
router.post('/restaurants', async (req, res) => {
  try {
    const restaurants = await api.get('/search', {
      params: { ...req.body, limit: 50 },
    });
    res.send(restaurants.data);
  } catch (err) {
    console.log(err.response.data);
    res.status(500).send(err.response.data);
  }
});

module.exports = router;
