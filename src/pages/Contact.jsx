import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import "./Contact.scss";

class Contact extends Component {
	render() {
		return (
			<Grid centered>
				<Grid.Column width={8}>
					<div className="contact">
						<h3> Have A Problem? Get in touch!</h3>
						<br />
						<p>Email us at</p>
						<a href ="mailto:support@watchX.com">
							<h5>support@watchX.com</h5>
						</a>
						<br />
						{/* <p>or Call us at 1-800-000-2311</p> */}
						<br />
						{/* <p>Operating Hours:</p> */}
						<br />
						{/* <p>Mon-Fri 9am - 5pm Eastern</p> */}
						<br />
						{/* <p>Please allow up to 48 hours for order processing.</p> */}
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Contact;
