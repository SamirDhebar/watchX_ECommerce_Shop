import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
import "./Catalog.scss";

class Catalog extends Component {
	render() {
		const { products } = this.props;
		return (
			<div className="listPage">
				<div className="spacer-horizontal" />
				<div className="spacer-vertical" />
				{ products.map((product) => {
					return (
						<div key={product.id}>
							<div className="product-container">
								<div className="product-images" >
									<Link key={product.id} to={`/product/${product.id}`} >
										<img src={product.images[0].small} />
									</Link>
								</div>
								<div className="product-description">
									<div className="title">{product.name}</div>
									<div className="details">
										<div >
											{product.description}
										</div>
										<div className="price">$ {product.price}</div>
										<Link key={product.id} to={`/product/${product.id}`} >
											<div className="page-button">Additional Info</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})
				}
			</div>

		);
	}
}

export default Catalog;
