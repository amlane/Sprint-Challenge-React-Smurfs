import React from 'react';

function SmurfPage(props){
    const id = props.match.params.id;
    const smurf = props.smurfs.find( smurf => `${smurf.id}` === id )
    return (
        <div>
            <div className="character-info-wrapper">
                <h1>{props.name}</h1>
                <h4>({props.age})</h4> 
                <h4>({props.height})</h4> 
            </div>
        </div>
    )
}

export default SmurfPage;