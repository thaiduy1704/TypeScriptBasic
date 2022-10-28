import Card from "./components/Card";
import person from "./data";

function App() {
  const restartPerson = () => {};
  const deletePerson = () => {};
  return (
    <main className="container">
      <Card
        personList={person}
        restartPerson={restartPerson}
        deletePerson={deletePerson}
      />
    </main>
  );
}

export default App;
