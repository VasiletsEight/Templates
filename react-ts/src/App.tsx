import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {store} from "./sotre/store";
import {Provider} from 'react-redux'

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

export default App;
