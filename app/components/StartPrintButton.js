var React = require('react');
var Radium = require('radium');
var styles = require('../styles');

var StartPrintButton = React.createClass ({
    render: function () {
        return (
            <button style={[styles.back, styles.space]}>
                Start Print
            </button>
        )
    }
});

module.exports = Radium(StartPrintButton);