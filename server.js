const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Init Middleware
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// defining routes:
app.use('/v1', require('./routes/api/restaurants'));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
