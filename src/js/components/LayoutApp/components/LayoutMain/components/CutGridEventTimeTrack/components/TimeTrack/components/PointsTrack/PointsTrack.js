
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PointsTrack.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import { get_points } from './vendors/get_points.js';


const PointsTrackComponent = ( props ) => {

    let {
        maxDurationTime,
        gridEventsParts,
    } = props;

    let [ points, setPoints ] = useState( [] );

    useEffect( () => {

        let res = get_points( gridEventsParts, maxDurationTime );

        console.dir( 'points' );
        console.dir( res );


    }, [ gridEventsParts ] );


    return (
        <div className = 'CGETT_points_track'>


        </div>

                
    )

};

export function PointsTrack( props ){
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    
    return (
        <PointsTrackComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
