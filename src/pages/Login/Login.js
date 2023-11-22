import './Login.css'
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState(null);
    const { login, error: authError } = useAuthentication();
    const navigate = useNavigate();

    const loginuser = async (e) => {
        e.preventDefault();

        const user = {
          email,
          password,
        };
    
        const res = await login(user);
        navigate('/')
        console.log(res);
    }

    useEffect(() => {
        if (authError) {
          setError(authError);
        }
      }, [authError]);

      useEffect(() => {
        if (error) {
          toast.error(error);
          setError(null)
        }
      }, [error]);

  return (
    
    <div className='ContainerHome'>
        <h1>login do cliente</h1>
        <form className='LoginForm'>
            <label className='LoginLabel'>
                e-mail
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className='LoginLabel'>
                senha
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className='btn-login' onClick={loginuser}>Continua</button>
            <p style={{marginBlock: 0, textAlign:'center'}}>Não tem cadastro? <NavLink style={{color:'black'}} to={'/cadastro'}>cadastre-se</NavLink></p>
        </form>
    </div>
  )
}
