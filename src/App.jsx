import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr_auto] bg-gradient-to-br from-yellow-200 via-yellow-50 to-orange-100">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
