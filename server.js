const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
  }));
// Import your route files
const customerRoutes = require('./routes/customerRoutes');
const usecaseRoutes = require('./routes/usecaseRoutes');

// Use the route files and specify base URLs
app.use('/customers', customerRoutes);
app.use('/usecases', usecaseRoutes);


// Other middleware and configurations can go here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
