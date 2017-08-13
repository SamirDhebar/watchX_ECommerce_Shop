// First items required to import: styling, react and router
import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importing components below
import Checkout from "components/Checkout";
import Item from "components/Item";
import Navigation from "components/Navigation";
import Products from "components/Products";


// Importing pages below
import FourOhFour from "pages/404";
import Cart from "pages/Cart";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Items from "pages/Items";
import OrderSuccess from "pages/OrderSuccess";


// Import JSON info
import PRODUCTS from "json/products.json";

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
						<Route exact path="/items" component={Items} />
						<Route exact path="/ordersuccess" component={OrderSuccess} />
						<Route exact path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
