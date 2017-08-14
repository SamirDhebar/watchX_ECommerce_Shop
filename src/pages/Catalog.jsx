import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Catalog extends Component {
	render() {
		const { products } = this.props;
		return (
			<div className = "Catalog">
				{products.map((product) => {
					return [
						<div className = "Catalog-item">
							<Link key = {product.id} to= {`/product/${product.id}`}>
								<h3 className = "Catalog-name"> {product.name}</h3>
							</Link>
													 <img className= "Catalog-image-main" src= {product.images[0].large}/>
													 <div className= "Catalog-image-details">
											 		 <img className= "Catalog-image-side" src= {product.images[1].medium}/>
													 <h3 className= "Catalog-price"> ${product.price}</h3>
													 </div>
												 </div>];
				})}
			</div>
		);
	}
}

export default Catalog;
