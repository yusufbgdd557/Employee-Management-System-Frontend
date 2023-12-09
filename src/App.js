import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <div className="app-container">
          <HeaderComponent />
          <div className="div-container">
            <Routes>
              <Route path='/' element={<ListEmployeeComponent />} />
              <Route path='/employees' element={<ListEmployeeComponent />} />
              <Route path='/add-employee' element={<CreateEmployeeComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
