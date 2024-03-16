import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RestoreAccessPage from './pages/RestoreAccessPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/restore-access' element={<RestoreAccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

