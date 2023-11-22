import Cookies from 'js-cookie';
import React from 'react'
import { useState, useEffect } from 'react';
import '../../App.css';
import './Carrinho.css';
import logo from '../../assets/logo_01.png'
import {ReactComponent as CarrinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as AddIcon} from '../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as RemoveIcon} from '../../assets/icons/remove_FILL0_wght400_GRAD0_opsz24.svg';

const Carrinho = () => {
    const [carrinho, setCarrinho] = useState([])    
    const [valor, setValor] = useState(0)

    useEffect(() => {
        Cookies.get('carrinho') && setCarrinho(JSON.parse(Cookies.get('carrinho')))
    }, [])
    
    

    const handleAdd = (e) => {
        if(e.target.nodeName === 'svg'){
            carrinho[e.target.attributes.nome.nodeValue].quantidade += 1
            setValor(valor + 1)
        }
        let saida = {}
        for (var prop in carrinho) {
            if (carrinho[prop].quantidade > 0){
                saida[prop] = carrinho[prop]
            }
        }
        
        if(Object.values(saida).length > 0){
            Cookies.set('carrinho',JSON.stringify(saida), {expires: 1})
        }
    }

    const handleRemove = (e) => {
        if(e.target.nodeName === 'svg'){
            if(carrinho[e.target.attributes.nome.nodeValue].quantidade > 0){
                carrinho[e.target.attributes.nome.nodeValue].quantidade -= 1
                if(carrinho[e.target.attributes.nome.nodeValue].quantidade === 0){
                    delete carrinho[e.target.attributes.nome.nodeValue]
                }
            }
            setValor(valor + 1)
            let saida = {}
            for (var prop in carrinho) {
                if (carrinho[prop].quantidade > 0){
                    saida[prop] = carrinho[prop]
                }
            }
            Cookies.set('carrinho',JSON.stringify(saida), {expires: 1})

        }
    }
    // console.log()
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
                    <p className='ContainerProdutosItem'>R${(item.valor * item.quantidade).toFixed(2).replace('.',',')}</p>
                    <div className='ContainerProdutosItemQuantidade'>
                        <p className='ContainerProdutosItem'>Quantidade</p> 
                        <div className='ContainerProdutosItemQuantidadeControl'>
                            <RemoveIcon style={{width:'28px', height:'28px'}} nome={item.nome} onClick={(e) => handleRemove(e)}/>
                            <p className='ContainerProdutosItem' style={{fontWeight: 600}}>{item.quantidade}</p>
                            <AddIcon style={{width:'28px', height:'28px'}} nome={item.nome}  onClick={(e) => handleAdd(e)}/> 
                        </div>
                    </div>
            </div>
        </div>
            )}
            {Object.values(carrinho).length > 0 &&  <div className='ContainerCarrinhoTotal' >
                <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>Total</p>
                <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>R$ {
                Object.values(carrinho).reduce((acc, objeto) => { 
                return acc + (objeto.valor * objeto.quantidade)
                }, 0).toFixed(2).replace('.',',')}
                </p>
            </div>}
        </div>
    </div>
  )
}

export default Carrinho