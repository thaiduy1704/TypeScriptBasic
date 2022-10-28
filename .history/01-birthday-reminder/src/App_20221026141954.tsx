import Card from "./components/Card";
import person from "./data";

function App() {
  return (
    <main className="container">
      <Card personList={person} />
    </main>
  );
}

export default App;
