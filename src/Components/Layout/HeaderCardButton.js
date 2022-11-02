import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const HeaderCardButton = props => {
  // const cartCtx = useContext(cartContext);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};
export default HeaderCardButton;
