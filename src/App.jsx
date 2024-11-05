import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChooseWrapper from './components/ChooseWrapper';
import ErrorPage from './components/ErrorPage';
import LoadingPayment from './components/LoadingPayment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ChooseWrapper />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/LoadingPayment" element={<LoadingPayment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
