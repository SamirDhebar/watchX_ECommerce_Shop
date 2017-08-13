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
import Items from "pages/Product";
import OrderSuccess from "pages/OrderSuccess";
import Catalog from "pages/Catalog";

// Import JSON info
import PRODUCTS from "json/products.json";

class App extends React.Component {
	state = {
		products: PRODUCTS,
		cart: [],
		cartTotalItems : 0,
	};


 	_getProduct = (productId) => this.state.products.reduce((prev, product) => product.id === productId ? product : prev)

	_addToCart = (productId) => {
		const { cart, products } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
			cartTotalItems: cart.length + 1,
		});
		console.log(cart);
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="contact" component={Contact} />
						<Route exact path = "/catalog" render = {(props) => (
							<catalog
								products = {products}
							/>
						)}
						/>
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/product" component={Items} />
						<Route exact path="/ordersuccess" component={OrderSuccess} />
						<Route exact path="*" component={FourOhFour} />

					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
