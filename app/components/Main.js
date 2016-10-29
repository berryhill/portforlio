var React = require('react');
var MainWrapper = require('./MainWrapper');

var Main = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        {this.props.children}
        <div>
          <p>
            <a href="mailto:pinnappleworkshops@gmail.com">pinnappleworkshops@gmail.com</a>
            {/*&nbsp; | &nbsp;*/}
            {/*<a target="_blank" href="https://www.linkedin.com/in/matthew-berryhill-0b86a22a">LinkedIn</a>*/}
            {/*&nbsp; | &nbsp;*/}
            {/*<a target="_blank" href="http://www.github.com/berryhill">Github</a>*/}
          </p>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Main;
