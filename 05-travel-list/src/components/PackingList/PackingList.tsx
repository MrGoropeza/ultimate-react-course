import "./PackingList.scss";

import { Item } from "..";
import { INITIAL_ITEMS } from "../../lib/dummy";

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {INITIAL_ITEMS.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
