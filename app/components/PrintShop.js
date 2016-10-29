var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var MainWrapper = require('./MainWrapper');
var SubmitPrintButton = require('./SubmitPrintButton');
var StartPrintButton = require('./StartPrintButton');
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
            <h2>
                Welcome to the Print Shop
            </h2>

            <div>
                <Link to='/print_shop'>
                    <StartPrintButton />
                </Link>
            </div>

            {/*<input type='text' ref='username' className="form-control" placeholder='Username'/>*/}
            {/*<input type='password' ref='password' className="form-control" placeholder='Password'/>*/}
            {/*/!*<button onClick={(event) => this.handleClick(event)} className="btn btn-primary">*!/*/}
                {/*/!*Login*!/*/}
            {/*/!*</button>*!/*/}
            {/*<div>*/}
                {/*<Link to='/print_shop'>*/}
                    {/*<SubmitPrintButton onClick={(event) => this.handleClick(event)} className="btn btn-primary"/>*/}
                {/*</Link>*/}
            {/*</div>*/}
        </MainWrapper>
    )
}

PrintShop.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

module.exports = PrintShop;
