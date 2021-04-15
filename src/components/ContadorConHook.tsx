import { useCounter } from '../Hooks/useCounter';




export const ContadorConHook = () => {

 
    const {valor, acumular } = useCounter();

    return (
        <>
            <h3>Contador con Hook: <small>{valor}</small></h3>

            <button className="btn btn-dark"
            onClick={() => acumular(1)}
            >
                +1
            </button>

            &nbsp;
            
            <button className="btn btn-dark"
            onClick={() => acumular(-1)}
            >
                -1
            </button>

            


        </>
    )
}
