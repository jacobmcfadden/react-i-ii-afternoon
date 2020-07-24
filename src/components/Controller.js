import React, { useState } from 'react';
import { getNodeText } from '@testing-library/react';

function Controller(props) {

    return (
        <div className="controller">
            <h6 onClick = {(props.updateStatus) ? '' : () => props.previous()}> {"< Previous"} </h6>
            <div>
                <button onClick={() => props.update()}>Update</button>
                <button onClick={() => props.delete()}>Delete</button>
                <button onClick={() => props.add()}>Add</button>
            </div>
            <h6 onClick = {(props.updateStatus) ? '' : () => props.next()}> {"Next >"} </h6>
        </div>
      );
}

export default Controller;