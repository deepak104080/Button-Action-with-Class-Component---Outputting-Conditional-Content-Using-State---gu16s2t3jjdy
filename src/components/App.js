import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
		super();
		this.state = {
			status: false
		}
	};

	// componentDidUpdate() {
	// 	console.log(this.state)
	// }

    render() {
    	return(
    		<div id="main">
				{this.state.status && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
				<button id="click" onClick={() => this.setState({status: true})}>Show</button>
    		</div>
    	);
    }
}


export default App;

