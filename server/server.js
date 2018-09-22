const express = require('express');
const path = require('path');
const app = express();

const OVERVIEW_BUNDLE_URI = process.env.OVERVIEW_BUNDLE_URI || 'http://localhost:8008/bundle.js';
const PHOTOS_BUNDLE_URI = process.env.PHOTOS_BUNDLE_URI || 'http://localhost:3005/bundle.js';
const REVIEWS_BUNDLE_URI = process.env.REVIEWS_BUNDLE_URI || 'http://localhost:1337/bundle.js';

const OVERVIEW_URI = process.env.OVERVIEW_URI || 'http://localhost:8008';
const PHOTOS_URI = process.env.PHOTOS_URI || 'http://localhost:3005';
const REVIEWS_URI = process.env.REVIEWS_URI || 'http://localhost:1337';


const PORT = process.env.PORT || 3000;

app.get('/api/restaurants/:restaurantId/overview', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${OVERVIEW_URI}/api/restaurants/${restaurantId}/overview`);
});

app.get('/api/restaurants/:restaurantId/photos', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${PHOTOS_URI}/api/restaurants/${restaurantId}/photos`);
});

app.get('/api/restaurants/:restaurantId/reviews', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${REVIEWS_URI}/api/restaurants/${restaurantId}/reviews`);
});

app.get('/restaurants/:restaurantId/overview', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${OVERVIEW_URI}/restaurants/${restaurantId}/overview`);
});

app.get('/restaurants/:restaurantId/photos', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${PHOTOS_URI}/restaurants/${restaurantId}/photos`);
});

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  const { restaurantId } = req.params;
  res.redirect(`${REVIEWS_URI}/restaurants/${restaurantId}/reviews`);
});

app.get('/overview/bundle.js', (req, res) => {
  res.redirect(OVERVIEW_BUNDLE_URI);
});

app.get('/photos/bundle.js', (req, res) => {
  res.redirect(PHOTOS_BUNDLE_URI);
});

app.get('/reviews/bundle.js', (req, res) => {
  res.redirect(REVIEWS_BUNDLE_URI);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT}!`)});