import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header';
import Descripcion from './Componentes/Descripcion/Descripcion';
import Articulos from './Componentes/Articulos/Articulos';
import Articulos2 from './Componentes/Articulos/Articulos2/Articulos2';
import Articulos3 from './Componentes/Articulos/Articulos3/Articulos3';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Descripcion />
      <Articulos />
      <Articulos2 />
      <Articulos3 />
      <Footer />
    </div>
  );
}

export default App;
