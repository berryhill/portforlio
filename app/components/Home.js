var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var MainWrapper = require('./MainWrapper');
var PrintShopButton = require('./PrintShopButton');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        <h1>
          Pinnapple Workshops
        </h1>
        <h2>
          Select Shop
        </h2>
        <div>
          <Link to='/print_shop'>
            <PrintShopButton />
          </Link>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Home;
