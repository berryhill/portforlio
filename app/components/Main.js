var React = require('react');
var MainWrapper = require('./MainWrapper');

var Main = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        {this.props.children}
        <div>
          <p>
            <a href="mailto:matthewberryhill@gmail.com">matthewberryhill@gmail.com</a>
            &nbsp; | &nbsp;
            <a target="_blank" href="https://www.linkedin.com/in/matthew-berryhill-0b86a22a">LinkedIn</a>
            &nbsp; | &nbsp;
            <a target="_blank" href="http://www.github.com/berryhill">Github</a>
          </p>
          <p2>
            This portfolio is created in ReactJS, you can find the code&nbsp;
            <a target="_blank" href="https://github.com/berryhill/portforlio">here</a>
          </p2>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Main;
