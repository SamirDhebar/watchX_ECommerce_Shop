import "./Checkout.scss";
import React, { Component } from "react";

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customerName: "",
			customerEmail: "",
			customerAddress: "",
			customerState: "",
			customerZip: "",
			customerPhone: "",
		};
	}
	render() {
  		const { cartTotal } = this.props;

  		return (
  			<div className="checkout-form-container">
  				<form action="/Success">
  					<div className="button-field">
  						<label name="userName">Username</label>
  						<input type="text" name="userName" required />
  					</div>
  					<div className="button-field">
  						<label name="userEmail">userEmail</label>
  						<input type="text" name="userEmail" required />
  					</div>
  					<div className="button-field">
  						<label name="userPhone">Phone</label>
  						<input type="text" name="userPhone" required />
  					</div>
  					<div className="button-field">
  						<label name="userAddress">Street address</label>
  						<input type="text" name="userAddress" required />
  					</div>
  					<div className="button-field">
  						<label name="userState">State</label>
  						<input type="text" name="userState" required />
  					</div>
  					<div className="button-field">
  						<label name="userZip">Zip code</label>
  						<input type="text" name="userZip" required />
  					</div>
  					<div className="button-field-submit hidden">
  						<label name="submit" >Submit</label>
  						<button type="submit" />
  					</div>

  				</form>
  			</div>
  		);
  	}
}

export default Checkout;
