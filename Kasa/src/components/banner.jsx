import * as React from 'react';
import PropTypes from 'prop-types';
import banner_background from '../assets/banner_background.png';
import banner_background_scnd from '../assets/banner_background-2.png';
import '../scss/components/_banner.scss';

function Banner({ showSecond, showFirst }) {
    return (
        <div className="banner">
            {/* checks if showFirst is true */}
            {showFirst ? (
                <>
                    <img className="banner_first" src={banner_background} alt="first banner" />
                    <span>Chez vous, partout et ailleurs</span> {/* renders span only when showFirst is true */}
                </>
            ) : null}
            {showSecond && !showFirst ? ( // checks if showSecond is true and showFirst is false
                <img className="banner_second" src={banner_background_scnd} alt="second banner" />
            ) : null}
        </div>
    );
}

// Prop type validation for showSecond and showFirst
Banner.propTypes = {
    showSecond: PropTypes.bool.isRequired,
    showFirst: PropTypes.bool.isRequired,
};

export default Banner;
