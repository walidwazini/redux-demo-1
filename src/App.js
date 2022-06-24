import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import ProductList from "./components/Shop/ProductList";

function App() {
  return (
    <d>
      <Header />
      <main className="flex flex-col justify-center items-center pt-14" >
        <Cart />
        <ProductList />
      </main>
    </d>
  );
}

export default App;
