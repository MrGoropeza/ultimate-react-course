import "./Item.scss";

import { Task } from "../../lib/models";

const Item = ({ item }: { item: Task }) => {
  return (
    <li className="item">
      <span
        className="item-text"
        data-state={item.packed ? "packed" : undefined}
      >
        {item.quantity} {item.description}
      </span>

      <button type="button">❌</button>
    </li>
  );
};

export default Item;
