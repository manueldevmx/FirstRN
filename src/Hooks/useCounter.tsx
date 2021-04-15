import {useState} from 'react'
//un HOOK es una funcion


export const useCounter = ( inicial:number = 10) => {

    const [valor, setValor] = useState(0);

    const acumular = ( numero: number ) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }
   
}
