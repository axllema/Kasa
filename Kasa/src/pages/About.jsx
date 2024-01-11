import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';

function About() {
    return (
        <div>
            <Header />
            <Banner showSecond={true} showFirst={false} /> 
            {/* renders Banner component with showSecond set to true and showFirst set to false */}
            <Footer /> 
        </div>
    );
}

export default About;
