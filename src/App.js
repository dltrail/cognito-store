import { useState } from "react";
import "./App.scss";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const [count, setCount] = useState(6);

  const { data, isLoading, error } = useFetch(
    "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/roducts.json",
    count
  );

  const loadMore = () => {
    setCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>cognito store</h1>
      </header>
      {isLoading && <div>loading</div>}
      {error && <div>{error.msg}</div>}
      {data.length > 0 &&
        data.map((product, i) => (
          <div className="product-card" key={i}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      {data.length < 50 && !error && (
        <button onClick={loadMore}>load More</button>
      )}{" "}
    </div>
  );
}

export default App;
