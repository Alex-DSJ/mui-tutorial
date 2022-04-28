import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
