
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home/Home.js';

function App() {
  return (
  
    <div className="App">

      hello
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
