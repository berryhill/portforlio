var React = require('react');
var Intro = require('../components/Intro');

var IntroContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    return {
      isLoading: false
    }
  },
  render: function () {
    return (
      <Intro
        isLoading={this.state.isLoading}
        header={this.props.route.header} 
      />
    )
  }
});

module.exports = IntroContainer;
