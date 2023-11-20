import React from 'react'
import '../../App.css';
import './Home.css';
import logo from '../../assets/logo_01.png'

import cupcake01 from '../../assets/produtos/01.png'
import cupcake02 from '../../assets/produtos/02.png'
import cupcake03 from '../../assets/produtos/03.png'

//Icones 
import {ReactComponent as ProdutosIcon} from '../../assets/icons/dashboard_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as AddIcon} from '../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as RemoveIcon} from '../../assets/icons/remove_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as CarinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

const home = () => {
    const itens = [{
        nome: 'Cupcake Chocolate',
        valor: 'R$5,00'
        },{
            nome: 'Cupcake Blueberry',
            valor: 'R$5,00'
        },{
            nome: 'Cupcake Morango',
            valor: 'R$5,00'
        }]
  return (
    <div className='ContainerHome'>
        <div className='logotitulo'>
            <div>
                <img src={logo} alt="Logo" className='imgLogo'/>
            </div>
            <div>
                <p>Bom dia, Ewerton É um prazer ter você de volta</p>
            </div>
        </div>
        <div style={{width:'100vw'}}>
            <div className='containertitulo'>
                <ProdutosIcon style={{width:'40px', height:'40px', fill: '#FFF'}}/>
                <h4>Produtos</h4>
            </div>
            <div className='ContainerProduto'>
                <img src={cupcake01} alt="Logo" className='imgProduto'/>
                <div className='ContainerProdutosItens'>
                        <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>Cupcake Chocolate</p>
                        <p className='ContainerProdutosItem'>R$ 5,00</p>
                        <div className='ContainerProdutosItemQuantidade'>
                            <p className='ContainerProdutosItem'>Quantidade</p> 
                            <div className='ContainerProdutosItemQuantidadeControl'>
                                <RemoveIcon style={{width:'28px', height:'28px'}}/>
                                <p className='ContainerProdutosItem' style={{fontWeight: 600}}>0</p> 
                                <AddIcon style={{width:'28px', height:'28px'}}/> 
                            </div>
                        </div>
                </div>
            </div>
            <div className='ContainerProdutoBotao'>
                <button className='BotaoAddCarinho'> 
                    <CarinhoIcon style={{width:'22px'}}/> 
                    Adiciona ao Carrinho
                </button>
            </div>
        </div>
    </div>
  )
}

export default home