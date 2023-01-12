import { Greet } from "./components/Greet/Greet";
import { Application } from "./components/Application/Application";
import { Skills } from "./components/Skills/Skills";
import { content } from "./content";
import "./App.css";

function App() {
  return (
    <div className="app__root">
      {/* <Greet /> */}

      {/* <Application /> */}

      <Skills skills={content.Skills.list} />
    </div>
  );
}

export default App;
