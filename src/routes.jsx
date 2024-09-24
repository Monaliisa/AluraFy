import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './pages/Forms';
import Home from './pages/Home';
import Search from './pages/Search';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;