const fs = require('fs'); 

const crearArchivo = async ( base = 5, listar = false, hasta = 2 ) =>{
    try {
                
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`; 
        }
        if(listar){
            console.log('=================')
            console.log('  Tabla del ',base)
            console.log('=================')
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
       
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}
