function dinosaurio(nombre, peso, longitud){
   
    let peso_kilos;
    let longitud_metros
    peso_kilos = peso*1000;
    longitud_metros= longitud*0.3048;
    return [nombre + " " + peso_kilos.toFixed(2)+ " " + longitud_metros.toFixed(2)];
}

// console.log(dinosaurio("Dinorex",1,100));