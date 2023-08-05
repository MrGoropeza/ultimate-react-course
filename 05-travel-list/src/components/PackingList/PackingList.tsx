import "./PackingList.scss";

import { useState } from "react";
import { Item } from "..";

type Props = {
  items: Item[];
  onRemoveItem: (id: number) => void;
  onUpdateItem: (item: Item) => void;
  onClearList: () => void;
};

type Sort = "input" | "desc" | "packed";

const PackingList = ({
  items,
  onRemoveItem,
  onUpdateItem,
  onClearList,
}: Props) => {
  const [sortBy, setSortBy] = useState<Sort>("input");

  const sortedItems = items.slice();

  if (sortBy === "desc")
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as Sort)}
        >
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          type="button"
          disabled={items.length === 0}
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
