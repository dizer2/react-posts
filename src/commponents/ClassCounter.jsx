import React from "react";

class ClassCounter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.increment = this.increment.bind(this);
		this.desrement = this.desrement.bind(this);

	}

	increment() {
	  this.setState({count: this.state.count + 1})

	}
	desrement() {
	  this.setState({count: this.state.count - 1})

	}
  

	render() {
		return (
			
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.desrement}>Desrement</button>
		  </div>
		)
	}

}

export default ClassCounter;

