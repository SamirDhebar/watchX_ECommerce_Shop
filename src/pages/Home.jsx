import React, { Component } from "react";
import { connect } from "redux-thunk";
import { Grid } from "semantic-ui-react";
import "./Home.scss";

class Home extends Component {
	componentDidMount() {
		document.body.classList.add("has-bg");
	}

	componentWillUnmount() {
		document.body.classList.remove("has-bg");
	}
	render() {
		return (
			<Grid centered>
				<Grid.Column width={20}>
					<div className = "home">
						<div className="foo">
	  				<span className="letter" data-letter="watchX Timepieces" />

						</div>

						{/*
				 <h1> watchX </h1> */}


					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Home;
