import * as React from 'react';
/* import Loader from '../components/loader'; */
import Header from '../components/header';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import '../scss/style.scss'
import Footer from '../components/footer';

function Home() {
    return (
        <div>
            {/* <Loader /> */}
            <Header /> 
            <Banner showSecond={false} showFirst={true} /> 
            {/* renders Banner component with showSecond set to false and showFirst set to true */}
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;
