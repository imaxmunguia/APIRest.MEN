const _ = require('lodash');
const argv = require('yargs').argv;

if(argv.usuario==='usuario'){
		let x = {"nombre":"Jamie"};
		let y = {"apodo":"MitoCode"};
		let z = [
			{nombre:"Jaime",apellido:"Medina",edad:26},
			{nombre:"Mito",apellido:"Code",edad:26}
		]

		/*let resultado = _.assign(x,y);
		console.log(resultado);*/

		_.times(3,()=> console.log('Sucribete'));

		let resultado = _.find(z,{nombre:"Jaime"});
		console.log(resultado);

}
else
{
	console.log('Usuario no valido');
}