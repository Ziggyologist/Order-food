import Header from "./Components/Layout/Header";
import styles from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import {Fragment, useState} from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
