var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var MainWrapper = require('./MainWrapper');
var SubmitPrintButton = require('./SubmitPrintButton');
var Link = ReactRouter.Link;

function PrintShop (props) {
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
            <h1>3D Print Shop</h1>
            <h2>
                Start Print
            </h2>
            <div>
                <Link to='/intro'>
                    <SubmitPrintButton />
                </Link>
            </div>
        </MainWrapper>
    )
}

PrintShop.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

module.exports = PrintShop;
