import '../../App.css';
import './Produtos.css';
import logo from '../../assets/logo_01.png'
import { useState, useEffect } from 'react';

//Icones 
import {ReactComponent as ProdutosIcon} from '../../assets/icons/dashboard_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as AddIcon} from '../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as RemoveIcon} from '../../assets/icons/remove_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as CarinhoIcon} from '../../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


const Produtos = () => {
    const [carrinho, setCarrinho] = useState({})
    const [valor, setValor] = useState(0)
    const itens = [{
        id: 0,
        nome: 'Cupcake Chocolate',
        valor: 5.0,            
        url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/01.png'

        },{
            id: 1,
            nome: 'Cupcake Blueberry',
            valor: 5.0,
            url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/02.png'
        },{
            id: 2,
            nome: 'Cupcake Morango',
            valor: 5.0,            
            url: 'https://raw.githubusercontent.com/ewertonspe/loja-cupcake/main/src/assets/produtos/03.png'
        }]
    
    useEffect(() => {
        let dados = {}
        for (let i = 0; i < itens.length; i++) {
            dados[itens[i].nome] = {
                id: itens[i].id,
                nome: itens[i].nome,
                valor: itens[i].valor,
                url: itens[i].url,
                quantidade: 0
            }
        setCarrinho(dados)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddCarrinho = () => {
        let saida = {}
        for (var prop in carrinho) {
            if (carrinho[prop].quantidade > 0){
                saida[prop] = carrinho[prop]
            }
        }
        
        if(Object.values(saida).length > 0){
            Cookies.set('carrinho',JSON.stringify(saida), {expires: 1})
        }

        // saida = {}
        for (prop in carrinho) {
            carrinho[prop].quantidade = 0 
        }
        // setCarrinho(saida)
        console.log(carrinho)
        
        setValor(valor + 1)
        toast.success("Produtos adicionados")
    }
    

    const handleAdd = (e) => {
        if(e.target.nodeName === 'svg'){
            carrinho[e.target.attributes.nome.nodeValue].quantidade += 1
            setValor(valor + 1)
        }
    }

    const handleRemove = (e) => {
        if(e.target.nodeName === 'svg'){
            if(carrinho[e.target.attributes.nome.nodeValue].quantidade > 0){
                carrinho[e.target.attributes.nome.nodeValue].quantidade -= 1
            }
            setValor(valor + 1)
        }
    }
    
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
            {carrinho && Object.values(carrinho).map((item) => 
            <div className='ContainerProduto' key={item.id}>
                <img src={item.url} alt="Logo" className='imgProduto'/>
                <div className='ContainerProdutosItens'>
                        <p className='ContainerProdutosItem' style={{fontWeight: 600, fontSize: '18px'}}>{item.nome}</p>
                        <p className='ContainerProdutosItem'>R${(item.valor).toFixed(2)}</p>
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
            <div className='ContainerProdutoBotao'>
                <button className='BotaoAddCarinho' onClick={handleAddCarrinho}> 
                    <CarinhoIcon style={{width:'22px'}}/> 
                    Adiciona ao Carrinho
                </button>
            </div>
        </div>
    </div>
  )
}

export default Produtos