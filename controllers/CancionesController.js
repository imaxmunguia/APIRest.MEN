var mongoose = require('mongoose');
var cancion = require('../models/Canciones');

//GET - Retorna todas las canciones en la DB
exports.findAll = function(req, res){
	cancion.find(function(err, canciones){
    	if(err) 
    		res.status(500).send(err.message);
    	else
    		res.status(200).json(canciones);
    	console.log('GET /canciones')
	});
};

exports.addItem = function(req, res){
	console.log('POST /canciones');
	console.log(req.body);

	var newItem = new cancion({
		    _Id : req.body._Id,
        Cancion : req.body.Cancion,
        Artista : req.body.Artista,
          Album : req.body.Album,
           Anio : req.body.Anio,
           Pais : req.body.Pais 
	});

	newItem.save(function(err, item){
		if(err) 
			return res.status(500).send( err.message);
    	res.status(200).jsonp(item);
	});
};