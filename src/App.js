import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import MainPage from "./pages/MainPage";
import HandGameInfo from "./pages/hand/HandGameInfo";
import SoundGameInfo from "./pages/SoundGameInfo";
import LipGameInfo from "./pages/LipGameInfo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="game">
                    <Route path="hand" element={<HandGameInfo/>}/>
                    <Route path="sound" element={<SoundGameInfo/>}/>
                    <Route path="lip" element={<LipGameInfo/>}/>
                </Route>
            </Route>

        </Routes>
    );
}

export default App;
