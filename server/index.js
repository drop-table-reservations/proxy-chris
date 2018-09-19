const express = require('express');

const app = express();
app.use('/restaurants/:id', express.static('public'));

app.get('/restaurants/:restId/reviews', (req, res) => {
  const { restId } = req.params;
  const redirectURL = `http://localhost:1337/restaurants/${restId}/`;
  console.log('Redirecting to reviews with restId..', redirectURL);
  res.redirect(redirectURL);
});

app.get('/restaurants/:restId/overview', (req, res) => {
  const { restId } = req.params;
  const redirectURL = `http://localhost:8008/restaurants/${restId}/`;
  console.log('Redirecting to overview with restId..', redirectURL);
  res.redirect(redirectURL);
});

app.listen(3000, () => {console.log('Listening on port 3000')});