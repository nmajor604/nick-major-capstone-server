const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const listingsRoutes = require('./routes/listingsRoute.js')

app.use(express.json());
app.use('/listings', listingsRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});