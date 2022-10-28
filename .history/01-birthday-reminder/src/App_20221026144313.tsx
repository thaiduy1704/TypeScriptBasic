import Card from "./components/Card";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [first, setfirst] = useState(second);
  const restartPerson = () => {};
  const deletePerson = () => {};
  return (
    <main className="container">
      <Card
        personList={data}
        restartPerson={restartPerson}
        deletePerson={deletePerson}
      />
    </main>
  );
}

export default App;
