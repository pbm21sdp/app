import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AnimalList from './pages/AnimalList'; // Creează acest fișier mai târziu
import EmployeeLogin from './pages/EmployeeLogin'; // Creează acest fișier

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/animals" element={<AnimalList />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
      </Routes>
    </Router>
  );
}

export default App;