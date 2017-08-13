import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Catalog extends Component {
	render() {
		return (
			<div>
				<div className="All">
					{PRODUCTS.map((product) => (
						<div className="container">
							<Link to={`./Detail/${product.id}`}>
								<div className="All-prod center">
									<h3>{product.name}</h3>
									<img src={product.images[0].medium}/>
		 							</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}


export default Catalog;
