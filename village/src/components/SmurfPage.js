import React from 'react';

function SmurfPage(props){
    const smurf = props.smurfs.find( smurf => `${smurf.id}` === props.match.params.id )
    return (
        <div>
            <div className="character-info-wrapper">
                <h1>{smurf.name}</h1>
                <h4>({smurf.age})</h4> 
                <h4>({smurf.height})</h4> 
            </div>
        </div>
    )
}

export default SmurfPage;