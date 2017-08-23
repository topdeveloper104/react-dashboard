import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Import Pages
import Dashboard from './pages/dashboard/dashboard';
import Services from './pages/services/services';
import ServiceHome from './pages/services/home/service-home';
import ServiceOne from './pages/services/1/service-one';
import ServiceTwo from './pages/services/2/service-two';
import ErrorPage from './pages/error/error';
import Example from './pages/example';

// Import Components
import HeaderBar from './components/header';
import NavigationMenu from './components/navigation-menu';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
			<HeaderBar />
			
			<NavigationMenu />
			
			<Router history={browserHistory}>
				{/* <IndexRoute component={Dashboard} /> */}
				<Route path="/" component={Dashboard} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/services" component={Services}>
					<IndexRoute component={ServiceHome} />
					<Route path="/services/1" component={ServiceOne} />
					<Route path="/services/2" component={ServiceTwo} />
					<Route path="/services/3" component={ErrorPage} />
					<Route path="/services/4" component={ErrorPage} /> 
				</Route>
				<Router path="/example" component={Example} />
			</Router>
			
			<Footer />

		</div>  
		
			
    );
  }
}

export default App;
