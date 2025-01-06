import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  address: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema); // Create a User model
export default User;
