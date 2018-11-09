var mongoose = require('mongoose')

var cancionesSchema = new mongoose.Schema(
{
  _Id: Number,
  Cancion: String,
  Artista: String,
  Album: String,
  Anio: Number,
  Pais: String 
});

module.exports = mongoose.model('Canciones', cancionesSchema);