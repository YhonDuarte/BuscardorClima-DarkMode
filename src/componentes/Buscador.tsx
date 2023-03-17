import {useState} from 'react';
import {Comienza} from './Comienza'
import {
    ContenedoBusqueda,
    Formulario,
    Input,
    Resultados,
    Select,
    Btn,
    Error,
    Detalles,
    MasDatos,
    Icon,
    Spiner
} from '../styled';
/* import logo1 from './01n.png' */

/* const icons = {
    "01n": logo1
}

icons[Resultados.icon] */

const Buscador = () => {

    const [datos, setDatos] = useState({pais: '', ciudad: ''})
    const [error, setError] = useState('inicial')
    const [resultados, setResultados] = useState({
        temperatura: 0,
        descripcion: '',
        humedad: '',
        presion: '',
        icon: '03n'
    })
    const [carga, setCarga] = useState(false)

    const selecionado = (e : any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const LimpiarError = () => setError('')


    const consultar = () => {

        if (datos.pais === '' || datos.ciudad === '') {
            setError('Debes seleccionar una ciudad');
        } else {
            LimpiarError()
            setCarga(true)
            const ID = '4a074fa7a9b2d0c413714bd5b8a66a00';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${
                datos.ciudad
            },${
                datos.pais
            }&appid=${ID}&lang=sp`

            fetch(url).then(response => response.json()).then(response => {

                if (response.cod === '404') {
                    setCarga(false)
                    setError('Esta ciudad no existe, intenta de nuevo')

                } else {
                    LimpiarError()
                    const temp = response.main.temp - 273.15
                    const hum = response.main.humidity
                    const press = response.main.pressure
                    const grados = Math.round(temp)
                    const descripccion = response.weather[0].description
                    const icon = response.weather[0].icon

                    setResultados({
                        temperatura: grados,
                        descripcion: descripccion,
                        humedad: hum,
                        presion: press,
                        icon: icon
                    })
                    setCarga(false)
                };

            }).catch(() => setError('Problemas de conexión'))

        }

    }

    return (
        <ContenedoBusqueda>
            <Formulario>
                <h1>Datos de busquedad</h1>
                <section>
                    <label>
                        Pais:
                        <Select name='pais'
                            onChange={selecionado}>
                            <option value=''>Selecciona</option>
                            <option value='AR'>Argentina</option>
                            <option value='CO'>Colombia</option>
                            <option value='CR'>Costa Rica</option>
                            <option value='ES'>España</option>
                            <option value='US'>Estados Unidos</option>
                            <option value='MX'>Mexico</option>
                            <option value='VE'>Venezuela</option>
                        </Select>
                    </label>


                    <label>
                        Ciudad:
                        <Input onBlur={selecionado}
                            name='ciudad'
                            type='text'
                            placeholder='Ej: Bogota'/>
                    </label>

                    <Btn onClick={consultar}>Consultar</Btn>
                </section>
            </Formulario>
            <Resultados>
                <h1>Resultados climaticos</h1>
                {
                carga === true ? <Spiner className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </Spiner> : error === "inicial" ? <Comienza/>: error !== "" ? <Error>{error}</Error> : <Detalles>

                    <section>{
                        resultados.temperatura
                    }°C</section>
                    <MasDatos>


                        <div>
                            <h3>Estado:
                            </h3>
                            <p> {
                                resultados.descripcion
                            }</p>
                        </div>
                        <div>
                            <h3>
                                Presion at:</h3>
                            <p> {
                                resultados.presion
                            }hPa</p>
                        </div>
                        <div>
                            <h3>Humedad:</h3>
                            <p> {
                                resultados.humedad
                            }%</p>
                        </div>
                        <Icon>
                            <img alt='icono del clima'
                                src={
                                    `./icons/${
                                        resultados.icon
                                    }.svg`
                                }/></Icon>
                    </MasDatos>
                </Detalles>
            } </Resultados>
        </ContenedoBusqueda>
    )
}

export default Buscador
