import {useEffect} from 'react'
import { useAuthValue } from "../../context/AuthContext";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import '../../App.css';
import './Pedidos.css';

import logo from '../../assets/logo_01.png'
import {ReactComponent as PedidosIcon} from '../../assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg';
import cupcake01 from '../../assets/produtos/01.png'

const Pedidos = () => {
    const { user } = useAuthValue();
    let uid = ''
    if(user){
        uid = user.uid;
    }
    const { documents } = useFetchDocuments("pedidos",null ,uid);

    // useEffect(() => {
        console.log(documents)
    // }, [document])
    
    
  return (
    
    <div className='ContainerHome'>

        <div className='logotitulo'>
            <div>
                <img src={logo} alt="Logo" className='imgLogo'/>
            </div>
            <div>
                <p>Aqui você consegue acompanhar os seu pedidos</p>
            </div>
        </div>
        <div style={{width:'100vw'}}>
            <div className='containertitulo'>
                <PedidosIcon style={{width:'40px', height:'40px', fill: '#FFF'}}/>
                <h4>Pedidos</h4>
            </div>
            <div className='ContainerPedidos'>
                <img src={cupcake01} alt="Logo" style={{width:'80px'}} className='imgProduto'/>
                <div className='PedidosItens'>
                    <p className='PedidosItemNome'>Cupcake Chocolate</p>
                    <div className='PedidosItemLinha'>
                        <p className='PedidosItem'>Data da Compra</p>
                        <p className='PedidosItem'>27/01/2023</p>
                    </div>
                    <div className='PedidosItemLinha'>
                        <p className='PedidosItem'>Status do Pedido</p>
                        <p className='PedidosItemStatus' style={{background: '#C8A2C8'}}>Pendente</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pedidos