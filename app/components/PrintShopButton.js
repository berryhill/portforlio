var React = require('react');
var Radium = require('radium');
var styles = require('../styles');

var PrintShopButton = React.createClass({
  render: function () {
    return (
      <button style={[styles.continue, styles.space]}>
        3D Print Shop
      </button>
    )
  }
});

module.exports = Radium(PrintShopButton);
