import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios 
    .get('http://localhost:3333/smurfs')
    .then( res => {
      this.setState({ smurfs: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addSmurf = newSmurf => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch(err => console.log(err))
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then( res => {
      this.setState({ smurfs: res.data })
    })
    .catch( err => console.log(err))
  }



  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink exact to="/" activeClassName="activeNavButton">Village</NavLink>{' '}
          <NavLink to="/smurf-form" activeClassName="activeNavButton">Add New Smurf</NavLink>
        </nav>

        <Route 
        exact
        path="/"  
        render={(props) => 
        <Smurfs 
        {...props} 
        smurfs={this.state.smurfs} 
        deleteSmurf={this.deleteSmurf}
        /> }
        />

        <Route
        path="/smurf-form"
        render={()=> <SmurfForm addSmurf={this.addSmurf} /> }
        />

        <Route 
        path="/smurfs/:id"
        render={props => <SmurfPage {...props} smurfs={this.state.smurfs} />}
        />

       
      </div>
    );
  }
}

export default App;
