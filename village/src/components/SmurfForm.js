import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        height: ''
      }
}

  handleInputChange = e => {
    this.setState({ 
      ...this.state,
      [e.target.name]: e.target.value
    });
  };


  addSmurf = e => {
    e.preventDefault();
    console.log("clicked")
    this.props.addSmurf(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="SmurfForm">
        <form className="form-container" onSubmit={this.addSmurf}>
        <h1>Add a new smurf to the village!</h1>
        <div className="input-container">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="form-btn" type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
