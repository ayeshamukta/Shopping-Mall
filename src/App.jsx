
import {  useState } from 'react'
import All_Products from './All Components/AllProducts/All_Products'
import Cart_Container from './All Components/Cart_Container/Cart_Container'
import Navbar from './All Components/Navbar/Navbar'
import './App.css'


function App() {
  
  const [active,setActive] = useState({buttonStatus: true,cart:'cart'});

  const handleActiveBtn = status=>
  {
      if(status === 'cart')
      {
        setActive({buttonStatus: true,cart:'cart'})
        
      }
      else
      {
        setActive({buttonStatus: false,cart:'about'})
      }
  }

  const[cartProducts,setCartProducts] = useState([]);

  const handleCartProducts = (product)=>
  {
    // console.log("This is my handle products",product);

    const newCartList = [...cartProducts,product];
    setCartProducts(newCartList);
    
  }
  
  const [navPrice,setNavPrice] = useState([0]);
  const handledecreasedPrice =(price,id)=>
  {
      setNavPrice(navPrice-price);

      const filterCart = cartProducts.filter(cp=> cp.id !== id);
      console.log(id);
      
      console.log(filterCart);
      
      setCartProducts(filterCart);


  }
  
  const handleIncreasedPrice =(price)=>
  {
      setNavPrice(navPrice+price);
  }

  return (
    <>
      
    <Navbar cartProducts={cartProducts.length} navPrice={navPrice}></Navbar>
    <div className='flex justify-around px-4 pr-8'>
        <All_Products handleCartProducts={handleCartProducts} handleIncreasedPrice={handleIncreasedPrice}></All_Products>
        <Cart_Container active={active} handledecreasedPrice={handledecreasedPrice} cartProducts={cartProducts} handleActiveBtn={handleActiveBtn}></Cart_Container>
    </div>
    </>
  )
}

export default App
