import { Greet } from "./components/Greet/Greet";
import { Application } from "./components/Application/Application";
import { Skills } from "./components/Skills/Skills";
import { Counter } from "./components/Counter/Counter";
import { content } from "./content";
import "./App.css";

function App() {
  return (
    <div className="app__root">
      <Greet />

      <Counter />

      <Skills skills={content.Skills.list} />

      <Application />
    </div>
  );
}

export default App;
