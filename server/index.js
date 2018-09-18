const express = require('express');

const app = express();
app.use(express.json());
app.use('/restaurants/:id', express.static('public'));

// app.get('/:id', (req, res) => {
//   console.log(req.params.id);
// });


app.listen(3000, () => {console.log('Listening on port 3000')});