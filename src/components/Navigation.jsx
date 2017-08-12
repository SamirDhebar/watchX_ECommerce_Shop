import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "iWatch",
		}, {
			to: "/products",
			text: "Products",
		}, {
			to: "/cart",
			text: "Cart",
		}];

		return (
			<div>
				<nav className="navbar">
					<div className="logo-box">
						<img src="src/assets/images/watch.png" className="logo-image" />
					</div>
					{links.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={link.customClass || "nav-link"}
							// activeClass="is-active"
							exact
						> {link.text}
						</NavLink>
					))}
					{/* <span className="nav-display-cart-count">{ this.props.cartCount }</span> */}
					<img src="src/assets/images/watch.png" className="logo-image" />

				</nav>
			</div>
		);
	}
}



export default Navigation;
