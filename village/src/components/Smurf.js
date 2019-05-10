import React from 'react';
import { Link } from 'react-router-dom';

function Smurf(props){
  return (
    <div className="Smurf">
     <Link to={`/smurfs/${props.id}`}><h3>{props.name}</h3></Link> 
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={e => props.deleteSmurf(e, props.id)}>X</button>
    </div>
  );
};



Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

