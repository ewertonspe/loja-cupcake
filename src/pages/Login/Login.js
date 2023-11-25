//css
import './Login.css'

//imports
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//hooks
import { useAuthentication } from "../../hooks/useAuthentication";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error , setError] = useState(null);
    const { login, error: authError, loading } = useAuthentication();
    const navigate = useNavigate();

    const loginuser = async (e) => {
        e.preventDefault();

        const user = {
          email,
          password,
        };

        const res = await login(user);
        // navigate('/');
        console.log(res);        
    }


    // let teste = toast
    // teste.onChange((e) => console.log(e))
    // console.log(toast.error('oi'),{
    //   toastId: 99
    // })

    useEffect(() => {
      // !loading && console.log(authError, loading)
      }, [loading]);

    useEffect(() => {
      console.log(authError, loading)
        if (authError && loading === false) {
          toast.error(authError);
        }
        else if (authError === false && loading === false) {
          toast.success('Login com sucesso',{toastId: 99});
          toast.onChange((e) => (
            e.status === 'removed' && 
            e.type === 'success' && 
            e.id === 99
            ) && navigate('/'))
        }       
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loading]);

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
