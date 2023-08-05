import "./App.scss";

import { useState } from "react";
import { Form, Logo, PackingList, Stats } from "./components";
import { Item } from "./lib/models";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => setItems((prev) => [...prev, item]);

  const handleRemoveItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const handleUpdateItem = (updatedItem: Item) =>
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <main className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </main>
  );
}

export default App;
