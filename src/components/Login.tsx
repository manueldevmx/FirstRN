import React, { useReducer } from 'react'


export const Login = () => {

    //Aca va toda la logica

   // const [state, dispatch] = useReducer(reducer, initialState)

    return (

        //Acaba va toodo el HTML
        <>
            <h3>Inicio de Sesion</h3>

            <div className="alert alert-info">
                validando
            </div>

            <div className="alert alert-danger">
                No autenticado
            </div>

            <div className="alert alert-success">
             Autenticado
            </div>


            <button 
                className="btn btn-success"
                >
                Iniciar Sesion
            </button>

            <button 
                className="btn btn-warning"
                >
                Cerrar Sesion
            </button>

        </>
    )
}
