const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Payment = sequelize.define('Payment', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Payment;
