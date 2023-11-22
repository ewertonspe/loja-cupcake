import Cookies from 'js-cookie';
import React from 'react'
import { useState, useEffect } from 'react';
import '../../App.css';

import logo from '../../assets/logo_01.png'
import {ReactComponent as CarrinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

const Carrinho = () => {
    const [carrinho, setCarrinho] = useState([])

    useEffect(() => {
        Cookies.get('carrinho') && setCarrinho(JSON.parse(Cookies.get('carrinho')))
    }, [])
    console.log(Object.values(carrinho))
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
                <CarrinhoIcon style={{width:'40px', height:'40px', fill: '#FFF'}}/>
                <h4>Carrinho</h4>
            </div>
            {Object.values(carrinho).length > 0 && 
            (Object.values(carrinho)).map((item) => 
            <div className='ContainerProduto' key={item.id}>
            <img src={item.url} alt="Logo" className='imgProduto'/>
            <div className='ContainerProdutosItens'>
                    <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>{item.nome}</p>
                    <p className='ContainerProdutosItem'>R${(item.valor * item.quantidade).toFixed(2)}</p>
                    <div className='ContainerProdutosItemQuantidade'>
                        <p className='ContainerProdutosItem'>Quantidade</p> 
                        <div className='ContainerProdutosItemQuantidadeControl'>
                            {/* <RemoveIcon style={{width:'28px', height:'28px'}} nome={item.nome} onClick={(e) => handleRemove(e)}/> */}
                            <p className='ContainerProdutosItem' style={{fontWeight: 600}}>{item.quantidade}</p>
                            {/* <AddIcon style={{width:'28px', height:'28px'}} nome={item.nome}  onClick={(e) => handleAdd(e)}/>  */}
                        </div>
                    </div>
            </div>
        </div>
            )}
        </div>
    </div>
  )
}

export default Carrinho