const fs = require('fs');
const colors = require('colors');




const crearArchivoTabla=(base=5,listar,hasta=10)=>{
    return new Promise((resolve,reject)=>{
        
        let salida='';
        let consola='';
        try {
            for(let demo=1;demo<=hasta;demo++){
                salida+= `${base} ${'x'.green} ${demo} ${'='.cyan} ${base*demo}\n`;
                consola+= `${base} ${'x'} ${demo} ${'='} ${base*demo}\n`;

             }
             if(listar){
                console.log('========================='.green);
                console.log(`TABLA DEL: ${base}`.green);
                console.log('========================='.green);
                console.log(salida);

             }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
            resolve(`Archivo tabla-${base}.txt creado exitosamente`);
        } catch (error) {
           reject('OCURRIO UN ERROR AL INTENTAR CREAR EL ARCHIVO');
        }
    }
  
    
    )};

const crearArchivoTablaAsync=async(base=5)=>{
    console.log('=========================');
    console.log(`TABLA DEL: ${base}`);
    console.log('=========================');
    let salida='';
    try {
        for(let demo=1;demo<=10;demo++){
            salida+= `${base} x ${demo} = ${base*demo}\n`;
         }
         console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`,salida);
       return `Aarchivo tabla-${base}.txt creado exitosamente`;
    } catch (error) {
        throw error;
    }
}


module.exports={
    crearArchivoTabla,
    crearArchivoTablaAsync
}