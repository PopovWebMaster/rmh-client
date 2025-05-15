// TimeTrack


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TimeTrack.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

const TimeTrackComponent = ( props ) => {

    let {


    } = props;



    return (
        <div className = 'timeTrack'>


TimeTrack
            
        </div>
    )

};

export function TimeTrack( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <TimeTrackComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
