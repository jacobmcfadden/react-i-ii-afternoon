import React from 'react';

function Employee(props) {
  
  const favoriteMovies = props.data.favoriteMovies.map((element, i) => { 
    return (
      <li key={i}> 
        <input disabled = {(props.update)? "" : "disabled"} className="item-info" value={element}/> 
      </li> 
    )
  });
  
  return (
    <div className="list">
      <h4 className="employee-id"> {`${props.data.id}/${props.totalCount}`} </h4>
      <input disabled = {(props.update)? "" : "disabled"} className="employee-name" value={`${props.data.name.first} ${props.data.name.last}`}/>
      <div className="line-item">
        <p className="item-title">City: </p>
        <input disabled = {(props.update)? "" : "disabled"} className="item-info" value={JSON.stringify(props.data.city)}/>
      </div>
      <div className="line-item">
        <p className="item-title">Country: </p>
        <input disabled = {(props.update)? "" : "disabled"} className="item-info" value={JSON.stringify(props.data.country)}/>
      </div>
      <div className="line-item">
        <p className="item-title">Employer: </p>
        <input disabled = {(props.update)? "" : "disabled"} className="item-info" value={JSON.stringify(props.data.employer)}/>
      </div>
      <div className="array-item">
        <p className="array-title">Favorite Movies: </p>
        <ol>
          {favoriteMovies}
        </ol>
      </div>
    </div>
  );
}

export default Employee;