import { useState } from "react";
import "./App.scss";
import { useFetch } from "./Hooks/useFetch";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Basket from "./components/Basket/Basket";
import cart from "./assets/cart.svg";

function App() {
  const [count, setCount] = useState(6);
  const [isBasketShowing, setBasketShowing] = useState(false);

  const { data, isLoading, error } = useFetch(
    "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json",
    count
  );

  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 6);
  };

  const handleToggleBasket = () => {
    setBasketShowing(!isBasketShowing);
  };

  return (
    <main className="App">
      <button className="cartButton" onClick={handleToggleBasket}>
        <img src={cart} alt="cart icon" />
      </button>
      <Header />
      {isLoading && <div>loading</div>}
      {error && <div>{error.msg}</div>}
      <ProductList products={data} loadMore={handleLoadMore} />
      <Basket open={isBasketShowing} close={handleToggleBasket} />
    </main>
  );
}

export default App;
