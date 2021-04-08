import "./App.css";
import Header from "./components/header";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header heading={"My Todo App"} />
      <Form />
    </div>
  );
}

export default App;
