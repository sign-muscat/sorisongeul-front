import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import LipGameInfo from "./pages/LipGameInfo";
import MainPage from "./pages/MainPage";
import HandGameInfo from "./pages/hand/HandGameInfo";
import MypageHomePage from "./pages/myPage/MypageHomePage.js";
import SoundGameInfo from "./pages/sound/SoundGameInfo";
import EditUsersInfo from "./pages/users/EditUsersInfo.js";
import IndividualSignUp from "./pages/users/IndividualSignUp.js";
import SignUpInfo from "./pages/users/SignUpInfo.js";
import SuccessPage from "./pages/users/SuccessPage.js";
import Withdraw from "./pages/users/Withdraw.js";

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
                <Route path="users">
                    <Route path="insert" element={<SignUpInfo />} />
                    <Route path="individual" element={<IndividualSignUp />} />
                    <Route path="success" element={<SuccessPage />} />
                    <Route path="delete" element={<Withdraw />} />
                    <Route path="edit" element={<EditUsersInfo />} />
                </Route>
                <Route path="mypage">
                    <Route path="mypageHome" element={<MypageHomePage />} />
                </Route>
            </Route>

        </Routes>
    );
}

export default App;
