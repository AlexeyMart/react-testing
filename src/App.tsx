import { Greet } from "./components/Greet/Greet";
import { Application } from "./components/Application/Application";
import "./App.css";

function App() {
  return (
    <div className="app__root">
      <Greet />
      <Application />
    </div>
  );
}

export default App;
