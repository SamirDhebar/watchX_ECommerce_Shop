import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Products from "components/Products";
import Catalog from "components/Catalog";
import Item from "components/Item";
import Home from "pages/Home";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Contact from "pages/Contact";
import AllItems from "pages/AllItems";
import FourOhFour from "pages/404";
import OrderSuccess from "pages/OrderSuccess";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/allitems" component={AllItems} />
						<Route exact path="/ordersuccess" componeont={OrderSuccess} />
						<Route exact path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
