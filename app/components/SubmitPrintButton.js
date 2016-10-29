var React = require('react');
var Radium = require('radium');
var styles = require('../styles');

var SubmitPrintButton = React.createClass ({
  render: function () {
    return (
      <button style={[styles.back, styles.space]}>
        Submit Print
      </button>
    )
  }
});

module.exports = Radium(SubmitPrintButton);
