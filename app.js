const fs = require('fs') 
const _ = require('lodash');
const argv = require('yargs').argv;

console.log('Nombre: '+argv.nombre)
console.log('Apellido: '+argv.apellido)
console.log('Cuenta: '+argv.cuenta)


var logger = fs.createWriteStream('Examen1.txt', { 
    flags: 'a' // 'a' means appending (old data will be preserved) 
}) 

logger.write('Primer Examen Desarrollo de App. Vanguardia.') // append string to your file 
logger.write(' Alumno: '+argv.nombre+' '+argv.apellido) // again 
logger.write('. Numero de Cuenta: '+argv.cuenta) // again 