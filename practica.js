import { validar,validarCaracteres } from "./exportar.js";

const regexAmericanExpress=/^(34|37)/;
const regexDinersClub=/^300|305|36|38/;
const regexDiscover=/^6011/;
const regexMastercard=/^5155/;
const regexVisa=/^4/

    let tipo=parseInt( prompt(`Por favor ingrese el numero que corresponda a su tipo de tarjeta: 
        1----American Xpress
        2----DinersClub
        3----Discover
        4----MasterCard
        5----Visa`));

    if(tipo==1 || tipo==2 || tipo==3 || tipo==4 || tipo==5){
        let numero
        while(true){
            numero=prompt("Por favor ingrese el numero de la tarjeta: ");
            if(validarCaracteres(numero) && numero.length<=16){
                break;
            }else{
                alert("Alguno de los caracteres ingresados no es valido, o se ingresaron mas de 16 caracteres.")
            }
        }
        //numero=parseInt(numero);
        if(tipo===1){
            if(validar(regexAmericanExpress, numero) && numero.length===15){
                alert("El numero de tarjeta es valido para American EXpress")
            }
            else{
                alert("El numero de tarjeta no es valido para American Xpress")
            }
        }
        else if(tipo===2){
            if(validar(regexDinersClub,numero)&& numero.length===14){
                alert("El tipo de tarjeta es valido para Dinners Club")
            }else{
                alert("El tipo de tarjeta no es valido para Dinners Club")
            }
        }
        else if(tipo===3){
            if(validar(regexDiscover,numero)&& numero.length===16){
                alert("El tipo de tarjeta es valido para Discover");
            }else{
                alert("El tipo de tarjeta no es valido para Discover")
            }
        }else if(tipo==4){
            if(validar(regexMastercard,numero)&&numero.length===16){
                alert("El tipo de tarjeta es valido para Mastercard")
            }else{
                alert("El tipo de tarjeta no es valido para Mastercard")
            }
        }else if(tipo===4){
            if(validar(regexVisa,numero)&&numero.length===16){
                alert("El tipo de tarjeta es valido para visa")
            }else{
                alert("El tipo de tarjeta no es valido para Visa");
            } 
        }           
    }
    else{
        alert("La opcion ingresada no es valida");
    }




