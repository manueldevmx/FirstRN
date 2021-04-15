//Beneficio directo de tipos (objtivo): Controlar la informacion establecida
//MUTACION: Para establecer el tipo de dato: despues del nombre de la variable se coloca : "tipo de dato", si sllegase a ocupar 2 tipos de datos se coloca despues del nombre de la variable : "tipo de dato 1" | "tipo de dato 2"


//Typescript es poner reglas de validacion para usarlo como lo defino

const TiposBasicos = () => {

    const nombre: string = 'Manuel'; //Las '', definen el valor como STRING
    const edad: number = 29;
    const estaActivo: boolean = false;


    return (
        <>
         <h3>Tipos Basicos</h3>   
         {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        </>
    )
}

export default TiposBasicos;