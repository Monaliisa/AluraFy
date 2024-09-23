import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './pages/Forms';
import Home from './pages/Home';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forms" element={<Forms />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;