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
			error: null,
		};
	}

	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.name],
		});
	}
	_handleSubmit = () => {

	}

	render() {
  		const { cartTotal } = this.props;

  		return (
  			<div className="checkout-form-container">
  				<form action="/Success">
  					<div className="button-field">
  						<label name="fullName">Full Name</label>
  						<input type="text" name="fullName" required />
  					</div>
  					<div className="button-field">
  						<label name="emailAddress">Email</label>
  						<input type="text" name="emailAddress" required />
  					</div>
  					<div className="button-field">
  						<label name="phoneNumber">Phone Number</label>
  						<input type="text" name="phoneNumber" required />
  					</div>
  					<div className="button-field">
  						<label name="userAddress">Street Address</label>
  						<input type="text" name="userAddress" required />
  					</div>
  					<div className="button-field">
  						<label name="customerState">State</label>
  						<input type="text" name="customerState" required />
  					</div>
  					<div className="button-field">
  						<label name="customerZip">Zip code</label>
  						<input type="text" name="customerZip" required />
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
