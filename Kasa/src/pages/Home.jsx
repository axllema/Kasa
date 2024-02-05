import React, { useState, useEffect } from 'react'; 
import Loader from '../components/loader';
import Header from '../components/header';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import '../scss/style.scss'
import Footer from '../components/footer';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data)
        const fakeAsyncOperation = () => {
            setTimeout(() => {
                setLoading(false); // Set loading to false after the operation is complete
            }, 2000); // Simulated 2 seconds of loading
        };

        fakeAsyncOperation();
    }, []);

    return (
        <div>
            <Loader visible={loading} />
            <Header /> 
            <Banner showSecond={false} showFirst={true} /> 
            {/* renders Banner component with showSecond set to false and showFirst set to true */}
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;