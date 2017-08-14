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

	// all App functions are declared here //
 	_getProduct = (productId) => {
			return this.state.products.reduce((prev, product) => {
				return product.id === productId ? product : prev;
			});
		}

	_addToCart = (productId) => {
		const { cart, products } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
			cartTotalItems: cart.length + 1,
		});
	}

	// _removeFromCart = (itemId) =>{
	// 	const { cart, items } = this.state;
	// 	this.setState({
	// 		cart: [
	// 			...cart.
	//
	// 		]
	// 	})
	// }

	render() {
		const { products, cart, cartTotalItems } = this.state;
		return (
			<BrowserRouter>
				<div>
					<Navigation cartTotalItems = {this.state.cartTotalItems}/>
					<Switch>
						<Route exact path ="/" component = {Home}/>
						<Route exact path = "/contact" component = {Contact}/>
						<Route exact path = "/catalog" render = {(props) => {
							return (
								<Catalog
									products = {products}
								/>
							);
						}}
						/>
						<Route exact path = "/product/:productId" render = {(props) => {
							return (
								<Product
									product = {this._getProduct(props.match.params.productId)}
									addToCart = {this._addToCart}
								/>
							);
						}}
						/>
						<Route exact path = "/cart" render = {(props) => {
							return (
								<Cart
									cart = {cart}
								/>
							);
						}}
						/>
						<Route exact path = "/checkout" render = {(props) => {
							return (
								<Checkout />
							);
						}}
						/>
						<Route exact path = "/contact" component = {Contact}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
