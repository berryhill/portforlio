var React = require('react');
var MainWrapper = require('./MainWrapper');

var Main = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        {this.props.children}
        <div>
          <p>
            matthewberryhill@gmail.com |
            <a href="https://www.linkedin.com/in/matthew-berryhill-0b86a22a">LinkedIn</a>
            |
            <a href="http://www.github.com/berryhill">Github</a>
          </p>
          <p2>
            This portforlio is created in ReactJS, you can find the code
            <a href="http://www.gibhub.com">here</a>
          </p2>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Main;
