import Card from "./components/Card";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [list, setList] = useState(data);
  const restartPerson = () => {
    setList(data);
  };
  const deletePerson = () => {
    setList([]);
  };
  return (
    <main className="container">
      <Card
        personList={list}
        restartPerson={restartPerson}
        deletePerson={deletePerson}
      />
    </main>
  );
}

export default App;
