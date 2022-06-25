import { useEffect } from 'react'
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Notification from './components/shared/Notification';
import ProductList from "./components/Shop/ProductList";


const collection = 'cart'
const FIREBASE_URL =
  `https://react-http-7483e-default-rtdb.asia-southeast1.firebasedatabase.app/${collection}.json`

function App() {
  const cart = useSelector(state => state.cart)
  const showCart = useSelector(state => {
    return state.ui.cartIsVisible
  })

  useEffect(() => {
    fetch(FIREBASE_URL, {
      method: 'PUT',
      body: JSON.stringify(cart),
    })
  }, [cart])

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-14" >
        <Notification />
        {showCart && <Cart />}
        <ProductList />
      </main>
    </>
  );
}

export default App;
