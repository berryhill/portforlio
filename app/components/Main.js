var React = require('react');
var MainWrapper = require('./MainWrapper');

var Main = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        {this.props.children}
        <div>
          <p>
            <a href="mailto:pinnappleworkshops@gmail.com">PinnappleWorkshops@gmail.com</a>
          </p>
        </div>
      </MainWrapper>
    )
  }
});

module.exports = Main;
