const {crearArchivoTabla,crearArchivoTablaAsync} = require('./helpers/mutlplicar')
const argv=require('./config/yargs');

require('colors');//cuando no se usa el metodo se puede importar asi , de una maneara simple


console.clear();

console.log(argv);
//  console.log('base: yargs',argv.base);
// const base=11;

crearArchivoTabla(argv.base,argv.l,argv.ha)
.then(mensaje=> console.log(mensaje.rainbow, 'metodo usando new promises'))
.catch(err=>console.log(err));


// crearArchivoTablaAsync(base+1)
// .then(mensaje=> console.log(mensaje, 'metodo usando async'))
// .catch(err=>console.log(err));




