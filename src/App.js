import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import { useState } from 'react';

function App() {
  const [sueldoBruto, setSueldoBruto] = useState(0);


  return (
    <div className="App">
      <div className='container'>
        <Titulo/>
        <Banner/>

        {/* Seccion de calculo de remuneracion */}

        <div className='row mt-3'>
          <div className='col-lg-6'>
            <h4>Datos sueldo</h4>
            <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
            <input id='sueldoBruto' name='sueldoBruto' placeholder='1000000' type='text' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>
          </div>

          <div className='col-lg-6'>
            <h4>Resultados</h4>
            <p>Sueldo bruto: {sueldoBruto}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
