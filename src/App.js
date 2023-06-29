import "./App.css";
import { Header } from "./Header";
import { List } from "./List";
import data_object  from "./_data";

function App() {
  return (
    <div className="App">
      <Header />
      <List items={data_object} />
    </div>
  );
}

export default App;
