var React = require('react');
var ReactRouter = require('react-router');
var MainWrapper = require('./MainWrapper');
var ContinueButton = require('./ContinueButton')
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        <h1>
          My name is Matthew Berryhill
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
