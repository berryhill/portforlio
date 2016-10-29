var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var MainWrapper = require('./MainWrapper');
var PrintShopButton = require('./PrintShopButton');
var BackButton = require('./BackButton');
var Link = ReactRouter.Link;

function Intro (props) {
    // if (props.isLoading === true) {
    //   return (
    //     <MainWrapper>
    //       <h1>{props.header}</h1>
    //       <div>
    //         .. loading ..
    //       </div>
    //     </MainWrapper>
    //   )
    // }
    return ( // need to promisify here
        <MainWrapper>
            <h1>Introduction</h1>
            <p1>
                I started creating early in my life. From making music in the neighborhood
                garage band to building trebuches calculated to toss a tennis ball over
                one thousand feet. Ever since those years, my quest to create has only increased
                dramatically. With Software, Hardware, Computer Added Design, and Direct Digital
                Manufacturing, I can create anything I set myself to.
            </p1>
            <div>
                <Link to='/'>
                    <BackButton />
                </Link>
                <Link to='/intro'>
                    <PrintShopButton />
                </Link>
            </div>
        </MainWrapper>
    )
}

Intro.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

module.exports = Intro;
