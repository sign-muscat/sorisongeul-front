import {Box, Container, Flex} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import {useState} from "react";
import LoginPage from "../pages/auth/LoginPage";
import FindPasswordPage from "../pages/auth/FindPasswordPage";

function MainLayout() {

    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
    const openLoginModal = () => {
        setPasswordModalOpen(false); // 비밀번호 모달을 닫고
        setLoginModalOpen(true); // 로그인 모달을 연다
    };
    const closeLoginModal = () => setLoginModalOpen(false);

    const openPasswordModal = () => {
        setLoginModalOpen(false); // 로그인 모달을 닫고
        setPasswordModalOpen(true); // 비밀번호 찾기 모달을 연다
    };

    const closePasswordModal = () => setPasswordModalOpen(false);

    return (
        <>
            <Header onOpenLoginModal={openLoginModal} />
            <Flex direction="column" minHeight="100vh">
                <Container maxW='xl' display="flex" p={0}>
                    <Box flex="1">
                        <Outlet/>
                    </Box>
                    <Sidebar/>
                </Container>
            </Flex>
            <Box mt="auto">
                <Footer/>
            </Box>
            {isLoginModalOpen && (
                <LoginPage isOpen={isLoginModalOpen} onClose={closeLoginModal} onForgotPassword={openPasswordModal} />
            )}
            {isPasswordModalOpen && (
                <FindPasswordPage isOpen={isPasswordModalOpen} onClose={closePasswordModal} />
            )}
        </>

    );
}

export default MainLayout;