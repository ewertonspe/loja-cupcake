import '../../App.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { NavLink } from "react-router-dom"

//Icones 
import {ReactComponent as ProdutosIcon} from '../../assets/icons/dashboard_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as CarinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as PedidosIcon} from '../../assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as PerfilIcon} from '../../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';

import { useAuthValue } from "../../context/AuthContext";

const MenuBar = () => {
  const [menuContent, setmenuContent] = useState(false)
  const {MenuOpen, setMenuOpen} = useContext(AppContext);
  const { user } = useAuthValue();

  useEffect(() => {
      setTimeout(function() { setmenuContent(!menuContent)
      }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MenuOpen])  

  const handleClickMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  return (
    <div className='ContainerMenuBar' style={{width: MenuOpen ? '0px' : '240px'}}>
      {(!MenuOpen && !menuContent) && <div>
      <ul className='MenuList'>

        <NavLink to={'/'} className='MenuItem' onClick={handleClickMenu}>
          <ProdutosIcon className='IconMenu_User'/>
          <p style={{color:'#FFF', margin:'0px'}}>Produtos</p>          
        </NavLink>

        <NavLink to={'/carrinho'} className='MenuItem' onClick={handleClickMenu}>
          <CarinhoIcon className='IconMenu_User'/>
          <p style={{color:'#FFF', margin:'0px'}}>Carrinho</p>          
        </NavLink>

        {(user !== null) &&  <NavLink to={'/pedidos'} className='MenuItem' onClick={handleClickMenu}>
          <PedidosIcon className='IconMenu_User'/>
          <p style={{color:'#FFF', margin:'0px'}}>Pedidos</p>          
        </NavLink>}

        {(false) && <NavLink to={'/perfil'} className='MenuItem' onClick={handleClickMenu}>
          <PerfilIcon className='IconMenu_User'/>
          <p style={{color:'#FFF', margin:'0px'}}>Perfil</p>          
        </NavLink>}

      </ul>
      </div>}
    </div>
  )
}

export default MenuBar