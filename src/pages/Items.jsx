// only required here. This will only be passed info for other pages.
import React, { Component } from "react";
import RAWPRODUCTS from "json/products.json";


class AllItems extends Component {
	render() {
		return (
			<div>
				{/* Code example of importing json info into page which renders item name */}
				{/* {RAWPRODUCTS.map((product) => <h1>{product.name}</h1>)} */}

				{/* Code example of importing all json info into a page */}
				{/* <pre>{JSON.stringify(RAWPRODUCTS, null, 2)}</pre> */}
			</div>
		);
	}
}

export default AllItems;
// Check Panopto and Gist
