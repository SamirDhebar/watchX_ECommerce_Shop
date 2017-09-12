import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";




class Navigation extends Component {
	render() {
		console.log(this.props);
		const { cartTotalItems } = this.props;

		const links = [{
		// 	to: "/about",
		// 	text: "about",
		// },	{
			to: "/gallery",
			text: "Gallery",
		}, {
			to: "/contact",
			text: "Contact",
		}, {
			to: "/cart",
			text: "Cart" + " " + cartTotalItems,
		}];

		return (
			< Menu >
				< Menu.Menu>
					<Menu.Item position="left">
						<Link to="/" className="Nav-Link-Home">
							watchX
						</Link>
					</Menu.Item>
				</Menu.Menu>
				< Menu.Menu position= "middle">
					{links.map((link, index) => (
						<Menu.Item key= {index}>
							<NavLink
								key= {link.to}
								to= {link.to}
								className= "Nav-link"
								activeClassName= "is-active"
							>
								{link.text}
							</NavLink>
						</Menu.Item>
					))}
				</Menu.Menu>
			</Menu>
		);
	}
}

Navigation.propTypes = {
	cartTotalItems: PropTypes.number,
};


function mapStateToProps(state, props) {
	return {
		cartTotalItems: state.cart.cartTotalItems,
	};
}

export default connect(mapStateToProps) (Navigation);
