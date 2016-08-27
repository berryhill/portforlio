var React = require('react');
var Radium = require('radium');
var styles = require('../styles');

var BackButton = React.createClass ({
  render: function () {
    return (
      <button style={[styles.back, styles.space]}>
        Back
      </button>
    )
  }
});

module.exports = Radium(BackButton);
