import React from 'react';

function Controller(props) {

    return (
        <div className="controller">
            <h6 onClick = {(props.updateStatus) ? () => {} : () => props.previous()}> {"< Previous"} </h6>
            <div>
                <button onClick={() => props.update()}>Edit</button>
                <button onClick={() => props.delete()}>Delete</button>
                <button onClick={() => props.add()}>Add</button>
            </div>
            <h6 onClick = {(props.updateStatus) ? () => {} : () => props.next()}> {"Next >"} </h6>
        </div>
      );
}

export default Controller;