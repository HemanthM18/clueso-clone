const express = require('express');
const cors = require('cors');
require('dotenv').config();

const passport = require('passport');
require('./config/passport');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Clueso Backend API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
