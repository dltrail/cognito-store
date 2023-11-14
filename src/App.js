import { useState, useEffect } from "react";
import "./App.scss";
import { useFetch } from "./Hooks/useFetch";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Basket from "./components/Basket/Basket";
import cart from "./assets/cart.svg";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(6);
  const [isBasketShowing, setBasketShowing] = useState(false);
  const basketItems = useSelector((state) => state.basket.basketItems);
  const { data, isLoading, error } = useFetch(
    "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json",
    count
  );

  console.log(basketItems);

  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 6);
  };

  const handleToggleBasket = () => {
    setBasketShowing(!isBasketShowing);
  };

  useEffect(() => {
    const setOverFlow = () => {
      if (isBasketShowing) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    setOverFlow();
  }, [isBasketShowing]);

  return (
    <main className={`App ${isBasketShowing ? "hidden" : "showing"}`}>
      <Header cartButton={handleToggleBasket} cartTotal={basketItems.length} />
      {isLoading && <div>loading</div>}
      {error && <div>{error.msg}</div>}
      <ProductList products={data} loadMore={handleLoadMore} />
      <Basket
        open={isBasketShowing}
        close={handleToggleBasket}
        products={basketItems}
      />
    </main>
  );
}

export default App;
