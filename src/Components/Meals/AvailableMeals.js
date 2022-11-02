import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cabage rolls",
    description: "Finest cabbage and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Cheese Polenta",
    description: "A specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Sausage with Picked Cabbage",
    description: "Beautiful, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Egg with Spinach",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, index) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
