//throw 'Oh cielos ocurrio algo inesperado';
//throw true;

try{
    throw "Condicion inesperada";
    console.log("mi programa funciona bien");
}
catch(ex){
    console.error("Ocurrio un error:" + ex);
    
}
finally{
    console.info("Logre enviar datos auditoria");
}

