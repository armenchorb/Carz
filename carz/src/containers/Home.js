import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import Carousel from '../components/Carousel/Carousel';

class Home extends Component {
    render(){
        return (
            <div>
                <AppNavbar />
                <Carousel />
            </div>
        );
    };
};

export default Home;