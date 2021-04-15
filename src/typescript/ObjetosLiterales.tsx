import React from 'react'

//JSON.stringfy = transforma un objeto JSON
//Las INTERFACES son las que mandan sobre la definicion de los objetos

//EL objeto anidado abajo se crea en la misma interface, usualmente abajo se crea la siguiente interface => PRIMERO se define y despues se usa

//Las INTERFACES solo sirven para ponerle reglas de validacion de los objetos

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion:{
        pais: string;
        casaNo: number;
    }
}

export const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Manuel',
        edad: 29,
        direccion: {
            pais: 'Mexico',
            casaNo: 369
        }

    }


    return (
        <>
            <h3>Objetos  Literales</h3>
            <code>
                <pre>
                    {JSON.stringify( persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
