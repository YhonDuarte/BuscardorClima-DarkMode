import Title from './componentes/Title';
import Buscador from './componentes/Buscador';
import Modo from './componentes/Modo';
import {UI} from './styled';
import Nube from './componentes/Nube';
import {Nubes} from './nubesAnimadas';
import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {themes} from './componentes/themes';

function App() {


    const [modo, setModo] = useState < string > ('light')
    return (

        <ThemeProvider theme={
            modo === 'light' ? themes.light : themes.darck
        }>
            <UI>
                <Nubes>
                    <Nube/>
                    <Nube/>
                    <Nube/>
                    <Nube/>
                    <Nube/>
                    <Nube/>
                </Nubes>

                <Title/>
                <Buscador/>
                <Modo modo={modo}
                    setModo={setModo}/>
            </UI>
        </ThemeProvider>


    );
}

export default App;
