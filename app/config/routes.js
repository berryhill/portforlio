var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var IntroContainer = require('../containers/PrintShopContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      {/*<Route path='/intro' header='Intro' component={IntroContainer} />*/}
        <Route path='/print_shop' header='print_shop' component={PrintShopContainer} />
    </Route>
  </Router>
);

module.exports = routes;
