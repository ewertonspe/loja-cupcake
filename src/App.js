import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";

//Componentes 
import Header from './components/Header/Header'
// import Home from './pages/Home/Home'
import MenuBar from './components/MenuBar/MenuBar';
import Pedidos from './pages/Pedidos/Pedidos';
import Produtos from './pages/Produtos/Produtos';
import Carrinho from './pages/Carrinho/Carrinho';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      
      <BrowserRouter>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<Produtos/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
          <Route path='/carrinho' element={<Carrinho/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
