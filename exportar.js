export function validar(regex,numero){
    if(numero.match(regex)){
        return true;
    }
    else return false;
}

export function validarCaracteres(numero){
    let regex=/[0-9]/
    let array=numero.split("");
    let res=true;
    for(let n=0;n<array.length;n++){
        if(array[n].match(regex)){

        }else{
            res=false;
        }
    }
    return res;
}