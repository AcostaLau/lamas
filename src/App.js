import './App.css';
import { ItemContainer } from './components/ItemContainer';
import { Nab } from './components/Nab';



function App() {
  return (
    <div className="App">
      <header>
        <Nab/>
      </header>
      <h1>Lamas</h1>
      <ItemContainer/>
    </div>
  );
}

export default App;
