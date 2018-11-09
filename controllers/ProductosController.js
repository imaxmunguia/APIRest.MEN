var mongoose = require('mongoose');
var producto = require('../models/Productos');


exports.findAll = function(req, res){
	producto.find(function(err, productos){
    	if(err) 
    		res.status(500).send(err.message);
    	else
    		res.status(200).json(productos);
    	console.log('GET /productos')
	});
};

exports.findById = function(req, res){
	producto.findById(req.params.id,function(err, productos){
    	if(err) 
    		res.status(500).send(err.message);
    	else
    		res.status(200).json(productos);
    	console.log('GET /productos/'+req.params.id)
	});
};

exports.findByBrand = function(req, res, brand){
	var filtro = req.query.marca;
	producto.find(function(err, productos){
    	if(err) 
    		res.status(500).send(err.message);
    	else
    		res.status(200).json(productos);
    	console.log('GET /productos?marca='+filtro)
	});
};


exports.addItem = function(req, res){
	console.log('POST /productos');
	console.log(req.body);

	var newItem = new producto({
		    SKU : req.body.SKU,
    Descripcion : req.body.Descripcion,
          Marca : req.body.Marca,
       NEstante : req.body.NEstante
	});

	newItem.save(function(err, item){
		if(err) 
			return res.status(500).send( err.message);
    	res.status(200).jsonp(item);
	});
};