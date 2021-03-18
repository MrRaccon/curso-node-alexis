const { demandOption } = require('yargs');
const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
}).option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Indica si se quiere listar la tabla'

})
.option('ha',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    describe:'Indica hasta que numero se multiplicara'

})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }   if(isNaN(argv.ha)){
        throw 'Hasta tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports=argv;