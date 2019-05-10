import React from 'react';

class Smurf extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={e => this.props.deleteSmurf(e, this.props.id)}>X</button>
    </div>
  );
  }
};

function routeToSmurf(props, smurf){
  props.history.push(`/smurfs/${smurf.id}`)
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

