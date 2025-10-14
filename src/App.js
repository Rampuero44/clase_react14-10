import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneracion from './components/calculo';

function App() {
  


  return (
    <div className="">
      <div className='container'>
        <Titulo/>
        <Banner/>
        <CalculoRemuneracion/>
      </div>
    </div>
  );
}

export default App;
