import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AnimalList from './pages/AnimalList';
import EmployeeLogin from './pages/EmployeeLogin';
import AnimalDetails from './pages/AnimalDetails'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/animals" element={<AnimalList />} />
        <Route path="/animal/:id" element={<AnimalDetails />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
      </Routes>
    </Router>
  );
}

export default App; 