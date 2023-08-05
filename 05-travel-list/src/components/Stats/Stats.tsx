import { Item } from "../../lib/models";
import "./Stats.scss";

type Props = {
  items: Item[];
};

const Stats = ({ items }: Props) => {
  const itemsCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercentage =
    items.length > 0 ? Math.round((packedCount / items.length) * 100) : 0;

  return (
    <footer className="stats">
      {itemsCount === 0 && "Start adding some items to your list. 🚀"}

      {itemsCount > 0 &&
        packedPercentage === 100 &&
        "You got everything! Ready to go 🌍"}

      {itemsCount > 0 &&
        packedPercentage < 100 &&
        `💼 You have ${itemsCount} items on your list, and you already packed ${packedCount} (${packedPercentage}%)`}
    </footer>
  );
};

export default Stats;
