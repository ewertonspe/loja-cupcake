import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuthentication } from "../../hooks/useAuthentication";

const Cadastro = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')
  const [error , setError] = useState(null)

  const { createUser, error: authError, loading } = useAuthentication();

  const createuser = async (e) => {
    e.preventDefault()
    if(password !== confpassword) {
      setError('Senhas não conferem')
      return
    }
    const user = {
      displayName : name,
      email,
      password,
    };
    
    const res = await createUser(user);

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
        <h1>criar seu cadastro</h1>
        <form className='LoginForm'>
            <label className='LoginLabel'>
                nome completo
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='LoginLabel'>
                email
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='LoginLabel'>
                senha
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label className='LoginLabel'>
                confirme a senha
                <input type="password" required value={confpassword} onChange={(e) => setConfPassword(e.target.value)} />
            </label>
            {!loading && <button className='btn-login' onClick={(e) => createuser(e)}>Criar seu cadastro</button>}
            {loading && <button className='btn-login' onClick={(e) => createuser(e)} disabled>Aguarde ...</button>}
        </form>
    </div>
  )
}

export default Cadastro