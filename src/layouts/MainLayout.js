import {Box, Container, Flex} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function MainLayout() {

    return (
        <>
            <Header/>
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
        </>

    );
}

export default MainLayout;