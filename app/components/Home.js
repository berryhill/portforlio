var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var MainWrapper = require('./MainWrapper');
var ContinueButton = require('./ContinueButton');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        <h2>
          My name is ..
        </h2>
        <h1>
          Matthew Berryhill
        </h1>
        <h2>
          .. and I am a Creator
        </h2>
        <div>
          <Link to='/'>
            <ContinueButton />
          </Link>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Home;
