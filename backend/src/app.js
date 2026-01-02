const express = require('express');
const cors = require('cors');
require('dotenv').config();

const passport = require('passport');
require('./config/passport');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const feedbackRoutes = require('./routes/feedbackRoutes');

const insightsRoutes = require('./routes/insightsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

connectDB();

app.use('/api/auth', authRoutes);

app.use('/api/feedback', feedbackRoutes);

app.use('/api/insights', insightsRoutes);

app.get('/', (req, res) => {
  res.send('Clueso Backend API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
