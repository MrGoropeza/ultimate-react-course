import './Pizza.scss';

import { Pizza } from '../../lib/models/pizza.model';

type Props = {
  pizzaInfo: Pizza;
};

const PizzaInfo = ({ pizzaInfo }: Props) => {
  return (
    <li className={`pizza ${pizzaInfo.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaInfo.imageUrl} alt={pizzaInfo.name} />
      <div>
        <h3>{pizzaInfo.name}</h3>
        <p>{pizzaInfo.ingredients}</p>
        <span>{pizzaInfo.soldOut ? 'SOLD OUT' : pizzaInfo.price}</span>
      </div>
    </li>
  );
};

export default PizzaInfo;
