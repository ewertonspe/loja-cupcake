import React from 'react';
import '../../App.css';

import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

//Icones
import {ReactComponent as User} from '../../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as Menu} from '../../assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg';


const Header = () => {
  const {MenuOpen, setMenuOpen} = useContext(AppContext);

  const handleClick = () => {
    setMenuOpen(!MenuOpen)
  }
  
  return (
    <div className='ContainerHeader'>
      <div style={{padding:'8px'}}>
        <Menu className='IconMenu' onClick={handleClick}/>
      </div>
      <div style={{padding:'8px'}}>
      <User className='IconMenu'/>
      </div>
    </div>
  )
}

export default Header