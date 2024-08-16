// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import About from './pages/About';
import ProfilePage from './pages/ProfilePage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/test' element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms' element={<TermsOfService />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute(props) {
  const user = localStorage.getItem('expensetracker-dev-user');
  console.log('ProtectedRoute check, user:', user); 

  if (user) {
    return props.children;
  } else {
    return <Navigate to='/login' />;
  }
}




export default App;
