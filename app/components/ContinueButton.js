var React = require('react');
var styles = require('../styles');

var ContinueButton = React.createClass({
  render: function () {
    return (
      <button type='button' className='btn btn-lg btn-info' style={styles.space}>
        Continue
      </button>
    )
  }
});

module.exports = ContinueButton;
