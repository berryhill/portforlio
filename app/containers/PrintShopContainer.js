var React = require('react');
var PrintShop = require('../components/PrintShop');

var PrintShopContainer = React.createClass({
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
            <PrintShop
                isLoading={this.state.isLoading}
                header={this.props.route.header}
            />
        )
    }
});

module.exports = PrintShopContainer;