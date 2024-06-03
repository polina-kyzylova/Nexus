import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import ScrollToAnchor from './components/ScrollToAnchor';


function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;


