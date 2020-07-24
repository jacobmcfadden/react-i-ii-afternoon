import React, { useState } from 'react';
import { getNodeText } from '@testing-library/react';

function Controller(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="controller">
            <h6 onClick={() => props.previous()}> {"< Previous"} </h6>
            <div>
                <button onClick={() => props.update()}>Update</button>
                <button>Delete</button>
                <button>Add</button>
            </div>
            <h6 onClick={() => props.next()}> {"Next >"} </h6>
        </div>
      );
}

export default Controller;