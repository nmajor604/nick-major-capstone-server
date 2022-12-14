const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

const listingsRoutes = require('./routes/listingsRoute.js')

app.use(express.json());
app.use(cors());

app.use('/', listingsRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});