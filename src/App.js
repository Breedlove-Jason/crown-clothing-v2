import React from 'react';
import Home from './components/routes/home/home.component'
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './components/routes/navigation/navigation.component'

function Shop() {
    return <h1>Shop</h1>;
}

function App() {


    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
            </Route>

        </Routes>
    );
}

export default App;
