
var mongoose = require('mongoose');

//Mongoon schema ja arvot nimi, kommentti
var ElokuvaSchema = new mongoose.Schema({
    nimi: String,
    kommentti: String
});

module.exports = mongoose.model('Elokuva', ElokuvaSchema);
