var mongoose = require('mongoose')

var productosSchema = new mongoose.Schema(
{
  SKU: Number,
  Descripcion: String,
  Marca: String,
  NEstante: Number
});

module.exports = mongoose.model('Productos', productosSchema);