import "./Item.scss";

import { Item } from "../../lib/models";

type Props = {
  item: Item;
  onRemoveItem: (id: number) => void;
  onUpdateItem: (item: Item) => void;
};

const Item = ({ item, onRemoveItem, onUpdateItem }: Props) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => {
          const updatedItem: Item = { ...item, packed: e.target.checked };
          onUpdateItem(updatedItem);
        }}
      />

      <span
        className="item-text"
        data-state={item.packed ? "packed" : undefined}
      >
        {item.quantity} {item.description}
      </span>

      <button type="button" onClick={() => onRemoveItem(item.id)}>
        ❌
      </button>
    </li>
  );
};

export default Item;
