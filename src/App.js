import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import MainPage from "./pages/MainPage";
import HandGamePage from "./pages/HandGamePage";
import SoundGamePage from "./pages/SoundGamePage";
import LipGamePage from "./pages/LipGamePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="game">
                    <Route path="hand" element={<HandGamePage/>}/>
                    <Route path="sound" element={<SoundGamePage/>}/>
                    <Route path="lip" element={<LipGamePage/>}/>
                </Route>
            </Route>

        </Routes>
    );
}

export default App;
