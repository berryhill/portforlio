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
          &nbsp; My name is ..
        </h2>
        <h1>
          Matthew Berryhill
        </h1>
        <h2>
          .. and I am a Creator &nbsp;
        </h2>
        <div>
          <Link to='/intro'>
            <ContinueButton />
          </Link>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Home;
