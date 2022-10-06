import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';

function App() {
  return (
    <div className="App transition-all">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
