import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import RestoreAccessPage from './pages/RestoreAccessPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/restore-access' element={<RestoreAccessPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

