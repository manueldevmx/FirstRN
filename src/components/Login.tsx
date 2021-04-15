
import React, { useReducer, useEffect } from 'react'


interface AuthState {
    validando: boolean;
    token: string | null,
    username: string,
    nombre: string
}


const initialState: AuthState = {
    validando: true,
    token: null,
    username:'',
    nombre: ''
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
   | { type: 'logout' }
   | { type: 'login', payload: LoginPayload }


const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }

        case 'login':
            const { nombre, username } = action.payload;
            return{
               validando: false,
               token: 'SHA-256',
               nombre,
               username 
            }
    
        default:
            return state;
    }


}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer ( authReducer, initialState);

    useEffect(() => {
      setTimeout (() => {
          dispatch({type: 'logout'});
      }, 1000)
    }, []);


    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                nombre: 'Manuel',
                username: 'Hackguar'
                   }
            })
    }

    const logout = () => {
        dispatch({ type: 'logout'});
    }
    


    if ( validando) {
        return(
            <>
                <h3>Iniciar Sesion</h3>
                <div className="alert alert-info">
                    Validando . . . 
                </div>
            </>
        )
    }

    return (

        //Acaba va toodo el HTML
        <>
            <h3>Inicio de Sesion</h3>

            {
                (token)
                ? <div className="alert alert-success"> Autenticado como: {nombre} </div>
                : <div className="alert alert-danger"> No Autenticado </div>
            }

            {
                (token)
                ? (
                <button 
                     className="btn btn-danger"
                     onClick={ logout }
                >
                     Cerrar Sesion
                </button>
                )
                :
                (
                    <button 
                    className="btn btn-success"
                    onClick={ login }
                    >
                    Iniciar Sesion
                </button>
                )
            }   
        </>
    )
}
