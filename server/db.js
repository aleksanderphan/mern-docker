const mongoose = require('mongoose');
const db =
  'mongodb+srv://uasflutter:iqGfjTJ5ZvSmu3Gd@test.lf8d8hm.mongodb.net/';

mongoose.set('strictQuery', true, 'useNewUrlParser', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
