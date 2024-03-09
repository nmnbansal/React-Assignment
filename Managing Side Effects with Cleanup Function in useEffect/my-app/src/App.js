import './App.css';
import { ScrollEvent } from './Components/ScrollEvent';
import { Timer } from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Timer/>
      <ScrollEvent/>
    </div>
  );
}

export default App;
