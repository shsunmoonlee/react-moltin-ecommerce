import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Category from './components/Category';

ReactDOM.render(
  	<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Layout>
        <Switch>
      		<Route path="/" exact component={Home}/>
      		<Route path="product/:id" component={ProductPage}/>
      		<Route path="category/:id" component={Category}/>
      		<Route path="checkout" component={Checkout}/>
    		</Switch>
      </Layout>
  	</BrowserRouter>,
  document.getElementById('root')
);
//
// const routes = (
// 	<Route path="/" component={Layout}>
// 		<IndexRoute component={Home}/>
// 		<Route path="product/:id" component={ProductPage}/>
// 		<Route path="category/:id" component={Category}/>
// 		<Route path="checkout" component={Checkout}/>
// 	</Route>
// );
//
// export default routes;
//
//
//
//
// export default class AppRoutes extends React.Component {
// 	render() {
// 		return (
// 			<BrowserRouter history={history}>
//
// 			</BrowserRouter>
// 			<Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
// 		);
// 	}
// }
