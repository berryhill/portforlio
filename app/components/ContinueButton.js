var React = require('react');
var Radium = require('radium');
var styles = require('../styles');

var ContinueButton = React.createClass({
  render: function () {
    return (
      <button style={[styles.continue, styles.space]}>
        Continue
      </button>
    )
  }
});

module.exports = Radium(ContinueButton);
