import React, { useState, useEffect } from 'react';

import Controller from './Controller';
import Employee from './Employee';

function Carousel(props) {

    const [totalCount, setTotalCount] = useState(0);
    const [currentFocus, setCurrentFocus] = useState(props.dataSet[0])
    const [currentItem, setCurrentItem] = useState(0)
    const [lastKeyNumber, setLastKeyNumber] = useState(0)
    const [updateValues, setUpdateValues] = useState(false)

    useEffect(() => {
        setTotalCount(props.dataSet.length);
        setCurrentFocus(props.dataSet[currentItem]);
        setLastKeyNumber(props.dataSet.length - 1);
    })

    function handleChange(action){
        if(action === 'next' && lastKeyNumber > currentItem) {
            setCurrentItem(currentItem + 1)
        } else if(action === 'previous' && currentItem > 0) {
            setCurrentItem(currentItem - 1)
        }
    }

    function handleUpdate(){
        if(updateValues === true) {
            setUpdateValues(false)
        } else {
            setUpdateValues(true)
        }
    }

    function handleDelete(){
        
    }

    function handleAdd(){
        
    }

    return (
            <div className="carousel">
              <Employee data={currentFocus} totalCount={totalCount} update={updateValues}/>
              <Controller 
                next={() => handleChange('next')} 
                previous={() => handleChange('previous')} 
                update={() => handleUpdate()}
                delete={() => handleDelete()}
                add={() => handleAdd()}
              />
              </div>
      );
}

export default Carousel;