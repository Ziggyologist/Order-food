import Header from "./Components/Layout/Header";
import styles from "./App.module.css";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import {Fragment, useState} from "react";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
