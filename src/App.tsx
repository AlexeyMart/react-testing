import { AppProviders } from './providers/AppProviders';
import './App.css';
import { Greet } from './components/Greet/Greet';
import { Application } from './components/Application/Application';
import { Skills } from './components/Skills/Skills';
import { Counter } from './components/Counter/Counter';
import { Mui } from './components/Mui/Mui';
import { Users } from './components/Users/Users';
import { content } from './content';

function App() {
  return (
    <AppProviders>
      <div className="app__root">
        <div className="parent">
          <div className="top"></div>
          <div> Test</div>
          <div className="bottom"></div>
        </div>

        <Users />

        <Greet />

        <Mui />

        <Counter />

        <Skills skills={content.Skills.list} />

        <Application />
      </div>
    </AppProviders>
  );
}

export default App;
