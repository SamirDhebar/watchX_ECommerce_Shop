import React, { Component } from "react";
import { Link } from "react-router-dom";

class FourOFour extends Component {
	render() {
		return (
			<div className= "404">
				<Link to="/">
					<body>
						<code>
							<span>The Time Has Gone Missing! 404 Error!</span>
						</code>


					</body>
				</Link>
			</div>
		);
	}
}

export default FourOFour;
