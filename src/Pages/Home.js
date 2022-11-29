import React from 'react';
import Nav from "../Components/Nav";
import CommodityGallery from "../Components/CommodityGallery";
import Footer from "../Components/Footer";
import Header1 from './header1';
import Header2 from './Header2';

function Home (){

    return(
        <>
        <Nav />
        <Header1 />
        <Header2 />
        <CommodityGallery />
        <Footer />
        </>
    )
}

export default Home;