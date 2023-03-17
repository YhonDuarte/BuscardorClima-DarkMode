import {Inicio} from "../styled"


export const Comienza = () => {
    return (
        <Inicio><img alt='icono del clima'
                src={`./icons/02d.svg`}/>
            <p>Seleciona tu ciudad para comenzar</p>
        </Inicio>
    )
}
