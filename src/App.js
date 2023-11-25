//css
import './App.css';
import "react-toastify/dist/ReactToastify.css";

//imports
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

//Componentes 
import Header from './components/Header/Header'
import MenuBar from './components/MenuBar/MenuBar';
import Pedidos from './pages/Pedidos/Pedidos';
import Produtos from './pages/Produtos/Produtos';
import Carrinho from './pages/Carrinho/Carrinho';
import Cadastro from './pages/Cadastro/Cadastro';

//hooks
import { useAuthentication } from "./hooks/useAuthentication";
import { Login } from './pages/Login/Login';

// context
import { AuthProvider } from "./context/AuthContext";


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      
      <AuthProvider value={{ user }}>
        
      <BrowserRouter>
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
        
        <MenuBar/>
          <Routes>
            <Route path='/' element={<Produtos/>}/>
            <Route path='/pedidos' element={user ? <Pedidos/> : <Produtos/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
