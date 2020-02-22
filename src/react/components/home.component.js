import React from "react"
import '../../common/app.scss';

class App extends React.Component{
	render(){
		return(
			<div className="react_wrapper">
				<h2>React JS</h2>
				<div className="row">
					<div className="col-md-6 text-center">
						<img className="react_img_styles" src={"../../../src/common/assests/r2.png" } alt={"img1"} />
					</div>
					<div className="col-md-6">
						<p> This is simple React JS container showing the React Framwork is used.</p>
						<p>Yep we've got a React example. We actually just borrowed it from the react-router examples, to show how easy it is to migrate an existing app into single-spa</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App