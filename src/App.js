import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.js';
import WideLayout from "./layouts/WideLayout";
import HandGameInfo from "./pages/hand/HandGameInfo";
import LipGameInfo from "./pages/lip/LipGameInfo";
import MainPage from "./pages/MainPage";
import GestBookList from "./pages/myPage/guestBook/GuestBookList.js";
import MypageHomePage from "./pages/myPage/MypageHomePage.js";
import PricingPage from "./pages/pricing/PricingPage";
import SoundGameInfo from "./pages/sound/SoundGameInfo";
import EditUsersInfo from "./pages/users/EditUsersInfo.js";
import SignUp from "./pages/users/SignUp.js";
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
                    <Route path="insert" element={<SignUp />} />
                    <Route path="success" element={<SuccessPage />} />
                    <Route path="delete" element={<Withdraw />} />
                    <Route path="edit" element={<EditUsersInfo />} />
                </Route>
                <Route path="mypage">
                    <Route path="mypageHome" element={<MypageHomePage />} />
                    <Route path="gestBookList" element={<GestBookList />} />
                </Route>
            </Route>
            <Route path="/pricing" element={<WideLayout/>}>
                <Route index element={<PricingPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
