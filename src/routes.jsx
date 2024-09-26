import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewSong from './pages/NewSong';
import Home from './pages/Home';
import Search from './pages/Search';
import NewArtist from './pages/NewArtist';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-song" element={<NewSong />} />
                <Route path="/new-artist" element={<NewArtist />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;