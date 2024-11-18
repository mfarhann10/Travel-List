import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr_auto] bg-gradient-to-br from-yellow-200 via-yellow-50 to-orange-100">
      <Logo />
      <Form onAddItems={handleItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
