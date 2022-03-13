import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Dresses from "./dresses/Dresses";
import Shoes from "./shoes/Shoes";
import Accessories from "./accessories/Accessories";

const App = () => (
    <div className="container">
        <Header title={'Móda'} />
        <Dresses />
        <Shoes />
        <Accessories />
        <Footer year={'2022'} author={'Czechitas'} />
    </div>
);

render(<App />, document.querySelector('#app'));
