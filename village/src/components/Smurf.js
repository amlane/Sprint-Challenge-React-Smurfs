import React from 'react';
import { Link } from 'react-router-dom';

class Smurf extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="Smurf">
     <Link to={`/smurf/${this.props.id}`}><h3>{this.props.name}</h3></Link> 
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={e => this.props.deleteSmurf(e, this.props.id)}>X</button>
    </div>
  );
  }
};


Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

