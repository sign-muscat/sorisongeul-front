import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from "./pages/MainPage";
import WideLayout from "./layouts/WideLayout";
import HandGameInfo from "./pages/hand/HandGameInfo";
import SoundGameInfo from "./pages/sound/SoundGameInfo";
import LipGameInfo from "./pages/lip/LipGameInfo";
import GuestBookList from "./pages/myPage/guestBook/GuestBookList.js";
import MypageHomePage from "./pages/myPage/MypageHomePage.js";
import PricingPage from "./pages/pricing/PricingPage";
import EditUsersInfo from "./pages/users/EditUsersInfo.js";
import SignUp from "./pages/users/SignUp.js";
import SuccessPage from "./pages/users/SuccessPage.js";
import Withdraw from "./pages/users/Withdraw.js";
import ProtectedRoute from "./components/router/ProtectedRoute";
import LoginPage from './pages/auth/LoginPage';
import FindPasswordPage from "./pages/auth/FindPasswordPage";

function App() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route
                        path='/find/password'
                        element={
                            <ProtectedRoute isAuthenticated={false} onRequireLogin={openLoginModal}>
                                <FindPasswordPage/>
                            </ProtectedRoute>
                        }
                    />
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
                        <Route path="guestBookList" element={<GuestBookList />} />
                    </Route>
                </Route>
                <Route path="/pricing" element={<WideLayout/>}>
                    <Route index element={<PricingPage/>}/>
                </Route>
            </Routes>
            <LoginPage isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </>
    );
}

export default App;