var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({  
    nama: String,
    Lokasi: String,
    Deskripsi: String
});

module.exports = mongoose.model('Todo', TodoSchema);  