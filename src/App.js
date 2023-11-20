import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes 
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MenuBar from './components/MenuBar/MenuBar';
import Pedidos from './pages/Pedidos/Pedidos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <BrowserRouter>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
        </Routes>
      </BrowserRouter>
      {/* <div className='ContainerContent'> */}
        {/* <PainelProdutos/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
