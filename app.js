/*const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const authRoutes = require('./Routes/authRoutes');
const subscriptionRoutes = require('./Routes/subscriptionRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});
*/
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const authRoutes = require('./Routes/authRoutes');
const subscriptionRoutes = require('./Routes/subscriptionRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000; // Changed to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});
