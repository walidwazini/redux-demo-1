import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import ProductList from "./components/Shop/ProductList";

function App() {
  const showCart = useSelector(state => {
    return state.ui.cartIsVisible
  })

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-14" >
        {showCart && <Cart />}
        <ProductList />
      </main>
    </>
  );
}

export default App;
