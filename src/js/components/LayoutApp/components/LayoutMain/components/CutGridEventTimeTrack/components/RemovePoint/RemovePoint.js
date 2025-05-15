// RemovePoint

// AddNewPoint

// TimeTrack


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemovePoint.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

const RemovePointComponent = ( props ) => {

    let {


    } = props;



    return (
        <div className = 'removePoint'>


RemovePoint
            
        </div>
    )

};

export function RemovePoint( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <RemovePointComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
