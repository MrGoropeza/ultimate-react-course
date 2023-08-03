import './Menu.scss';

import { PIZZA_DATA } from '../../lib/consts/data';
import PizzaInfo from '../Pizza/Pizza';

const Menu = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {PIZZA_DATA.map((pizza) => (
          <PizzaInfo key={pizza.name} pizzaInfo={pizza} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
