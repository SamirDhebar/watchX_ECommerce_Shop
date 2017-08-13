import "./product.scss";
import React, { Component } from "react";

class Product extends Component {
	constructor(props) {
		super(props);
	}

	_handleClick = (productId) => {
		this.props.addToCart(this.props.product.id);
	};

	render() {
		const { product } = this.props;

		return (

			<div className="product">
				<h1 className= "product-name">{product.name} </h1>
				<div className="product-images">
					<img className="product-image-side" src ={product.images[1].medium}/>
					<img className="product-image-main" src ={product.images[0].medium}/>
					<img className="product-image-band" src ={product.images[2].medium}/>
				</div>

				<div className="product-description">
					<p>{product.description}</p>
				</div>
				<div className="product-specs">
					<List horizontal>
						{product.specs.map((specs) => [
							<List.Item className="product-specs-label"> {specs.label.toUpperCase()}: </List.Item>,
							<List.Item> {specs.value}  </List.Item>,
						]
						)}
					</List>
				</div>
				<div className="product-price">
					<p> ${product.price} </p>
				</div>
				<div className="product-buy-button">
					<Button value = {product.id} onClick = {this._handleClick}> ADD TO CART </Button>
				</div>

			</div>

		);
	}
}

export default Product;
