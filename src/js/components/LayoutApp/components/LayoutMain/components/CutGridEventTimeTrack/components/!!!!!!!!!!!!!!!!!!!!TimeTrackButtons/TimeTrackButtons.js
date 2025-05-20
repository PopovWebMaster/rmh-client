// TimeTrackButtons


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TimeTrackButtons.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

const TimeTrackButtonsComponent = ( props ) => {

    let {


    } = props;



    return (
        <div className = 'timeTrackButtons'>


TimeTrackButtons
            
        </div>
    )

};

export function TimeTrackButtons( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <TimeTrackButtonsComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
