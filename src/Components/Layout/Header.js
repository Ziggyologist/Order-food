import {Fragment} from "react";
import imageMeal from "../../Images/mealPhoto.jpeg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={imageMeal} alt="food nicely arranged" />
      </div>
    </Fragment>
  );
};

export default Header;
