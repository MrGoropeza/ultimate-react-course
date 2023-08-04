import "./App.scss";
import { Form, Logo, PackingList, Stats } from "./components";

function App() {
  return (
    <main className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </main>
  );
}

export default App;
