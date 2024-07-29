import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, createStandaloneToast} from "@chakra-ui/react";

import customTheme from "./theme/theme.js"
import store from "./store";
import App from './App';

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ChakraProvider theme={customTheme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </ChakraProvider>
        <ToastContainer/>
    </>
);