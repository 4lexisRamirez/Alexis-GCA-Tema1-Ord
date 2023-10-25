function categorias(categoria,sueldo){
    let resultado;
    if(categoria==1){
        resultado = ((sueldo*15)/100);
        return  [categoria+" "+resultado.toFixed(2)];
    }
    if(categoria==2){
        resultado = ((sueldo*10)/100);
        return  [categoria+" "+resultado.toFixed(2)];
    }
    if(categoria==3){
        resultado = ((sueldo*8)/100);
        return [categoria+" "+resultado.toFixed(2)];
    }
    if(categoria==4){
        resultado = ((sueldo*7)/100);
        return [categoria+" "+resultado.toFixed(2)];
    }
    if(categoria!=1 || categoria!=2 || categoria!=3 || categoria!=4){
        return ["Categoria no encontrada!"];
    }
}

// console.log(categorias(4,100));