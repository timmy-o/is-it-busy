const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoutes);

// Import routes
const locationRoutes = require('./routes/locations');
const reportRoutes = require('./routes/reports');

// Use these routes
app.use('/locations', locationRoutes);
app.use('/reports', reportRoutes);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;


