import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "redux-thunk";
import "./About.scss";

class About extends Component {
	render() {
		return (
			<Grid centered>
				<Grid.Column width={10}>
					<div className= "about">
						<h1> watchX History</h1>

						<p>
					watchX has been at the forefront of innovative watch design and manufacturing since our original workshop opened its doors off the water on Lake Como, Italy. Always timeless, watchX timepieces excudes exceptionalism in design and craftsmanship.

						</p>
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default About;
