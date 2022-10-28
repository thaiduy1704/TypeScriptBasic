import Card from "./components/Card";
import person from "./data";

function App() {
  const restartPerson = () => {};
  const deletePerson = () => {};
  return (
    <main className="container">
      <Card personList={person} />
    </main>
  );
}

export default App;
