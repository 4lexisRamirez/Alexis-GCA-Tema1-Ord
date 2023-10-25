function impuestos(precio){
    let precio_final;
    if(precio<=20){
        precio_final=precio;
        return [precio_final.toFixed(2)];
    }
    if(precio>20 && precio<=40){
        precio_final=precio+(((precio-20)*30)/100);
        return [precio_final.toFixed(2)];
    }
    if(precio>40 && precio<=500){
        precio_final=precio+4+(((precio-40)*40)/100);
        return [precio_final.toFixed(2)];
    }
    if(precio>500){
        precio_final=precio+4+(((precio-40)*50)/100);
        return [precio_final.toFixed(2)];
    }

}
// console.log(impuestos(40));