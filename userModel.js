const mongoose = require('mongoose');

// Definisci lo schema utente
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  wallet: String
});

// Crea il modello
const User = mongoose.model('User', userSchema);

module.exports = User;
