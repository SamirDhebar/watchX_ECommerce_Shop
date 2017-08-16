import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import watchImg from "assets/images/watch.png";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "iWatch",
		}, {
			to: "/catalog",
			text:"Products",
		}, {
			to: "/cart",
			text: "Cart",
		}, {
			to: "/contact",
			text: "Contact Us",
		}];

		return (
			<div>
				<nav className="navbar">
					<div className="logo-box">
						<img src={watchImg} className="logo-image" />
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
					<img src={watchImg} className="logo-image" />

				</nav>
			</div>
		);
	}
}

export default Navigation;
