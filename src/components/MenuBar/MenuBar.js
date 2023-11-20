import '../../App.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { NavLink } from "react-router-dom"

//Icones 
import {ReactComponent as ProdutosIcon} from '../../assets/icons/dashboard_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as CarinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as PedidosIcon} from '../../assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as RastreioIcon} from '../../assets/icons/local_shipping_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as PerfilIcon} from '../../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';


const MenuBar = () => {
  const [menuContent, setmenuContent] = useState(false)
  const {MenuOpen, setMenuOpen} = useContext(AppContext);

  useEffect(() => {
      setTimeout(function() { setmenuContent(!menuContent)
      }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MenuOpen])  

  const handleClickMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const itens = [
    {
        nome:"Produtos",
        icone:<ProdutosIcon className='IconMenu'/>,
        url: '/'
    },
    {
        nome:"Carinho",
        icone:<CarinhoIcon className='IconMenu'/>,
        url: '/carinho'
    },
    {
        nome:"Pedidos",
        icone:<PedidosIcon className='IconMenu'/>,
        url: '/pedidos'
    },
    {
        nome:"Rastreio",
        icone:<RastreioIcon className='IconMenu'/>,
        url: '/rastreio'
    },
    {
        nome:"Perfil",
        icone:<PerfilIcon className='IconMenu'/>,
        url: '/perfil'
    },
]
  return (
    <div className='ContainerMenuBar' style={{width: MenuOpen ? '0px' : '240px'}}>
      {(!MenuOpen && !menuContent) && <div>
      <ul className='MenuList'>
        {itens.map((item) => <NavLink to={item.url} className='MenuItem' onClick={handleClickMenu}>
          {item.icone}
          <p style={{color:'#FFF', margin:'0px'}}>{item.nome}</p>          
        </NavLink>)}
      </ul>
      </div>}
    </div>
  )
}

export default MenuBar