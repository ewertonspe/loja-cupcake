import '../../App.css';
import './Home.css';
import logo from '../../assets/logo_01.png'
import { useState, useEffect } from 'react';

//Icones 
import {ReactComponent as ProdutosIcon} from '../../assets/icons/dashboard_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as AddIcon} from '../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as RemoveIcon} from '../../assets/icons/remove_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as CarinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import Cookies from 'js-cookie';

const home = () => {
    // Cookies.set('teste', 1234,{expires:1})
    
    
    const itens = [{
        nome: 'Cupcake Chocolate',
        valor: 'R$5,00',            
        url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/01.png?token=GHSAT0AAAAAACJHQDTDJMVTSSYV5VCFT77OZK3JL7A'

        },{
            nome: 'Cupcake Blueberry',
            valor: 'R$5,00',
            url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/03.png?token=GHSAT0AAAAAACJHQDTD63PQL7XCJ6KQVX6WZK3JO4A'
        },{
            nome: 'Cupcake Morango',
            valor: 'R$5,00',            
            url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/02.png?token=GHSAT0AAAAAACJHQDTDHK3PLN55VJFOUUGMZK3JOKA'
        }]
    
    useEffect(() => {
        Cookies.get('carrinho')
    }, [])
    
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
            {itens.map((item) => 
            <div className='ContainerProduto'>
                <img src={item.url} alt="Logo" className='imgProduto'/>
                <div className='ContainerProdutosItens'>
                        <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>{item.nome}</p>
                        <p className='ContainerProdutosItem'>{item.valor}</p>
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
            )}
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