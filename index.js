var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");
    http           = require("http"),
    server         = http.createServer(app),
    mongoose       = require('mongoose');
    cancionesController = require('./controllers/cancionesController');
    productosController = require('./controllers/productosController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

app.set('view engine','pug');

router.route('/api/productos')
	.get(productosController.findAll)
  	.post(productosController.addItem);

 router.route('/api/productos/:id')
  .get(productosController.findById);

 router.route('/api/menu')
 	.get((req,res)=>{
 		res.render('template',{titulo:'Exxamen 1', mensaje:'Isack Munguia'});
	}); 	

app.use(router);

mongoose.connect('mongodb://im3:ABC123xyz@ds030827.mlab.com:30827/bodegas', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else{
  	console.log('Isack Munguia');
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});