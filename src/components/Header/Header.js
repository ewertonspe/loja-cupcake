import React from 'react';
import '../../App.css';

import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

//Icones
import {ReactComponent as User} from '../../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as Menu} from '../../assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout_FILL0_wght400_GRAD0_opsz48.svg';


const Header = () => {
  const {MenuOpen, setMenuOpen} = useContext(AppContext);
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  const navigate = useNavigate();

  const GoToLogin = () => {
    navigate('/login')
  }

  const handleClick = () => {
    setMenuOpen(!MenuOpen)
  }

  return (
    <div className='ContainerHeader'>
      <div style={{padding:'8px'}}>
        <Menu className='IconMenu' onClick={handleClick}/>
      </div>
      <div style={{padding:'8px'}}>
      {!user ? <User className='IconMenu_User' onClick={GoToLogin}/> : <LogoutIcon className='IconMenu_User' onClick={logout}/>}
      </div>
    </div>
  )
}

export default Header