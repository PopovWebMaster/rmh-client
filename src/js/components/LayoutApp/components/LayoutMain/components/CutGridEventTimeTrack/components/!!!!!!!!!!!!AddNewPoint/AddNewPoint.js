// AddNewPoint

// TimeTrack


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewPoint.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

const AddNewPointComponent = ( props ) => {

    let {


    } = props;



    return (
        <div className = 'addNewPoint'>


AddNewPoint
            
        </div>
    )

};

export function AddNewPoint( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <AddNewPointComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
