import {Box, Container, Flex} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {

    return (
        <Flex direction="column" minHeight="100vh">
            <Header/>
            <Container maxW='xl'>
                <Outlet/>
            </Container>
            <Box mt="auto">
                <Footer/>
            </Box>
        </Flex>
    );
}

export default MainLayout;