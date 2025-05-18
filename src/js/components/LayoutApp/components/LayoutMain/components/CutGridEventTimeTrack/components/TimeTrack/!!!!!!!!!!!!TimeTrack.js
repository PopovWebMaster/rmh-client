// TimeTrack


import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TimeTrack.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';

import { PointOfTimeBoundary } from './components/PointOfTimeBoundary/PointOfTimeBoundary.js';
import { PointsTrack } from './components/PointsTrack/PointsTrack.js';

const TimeTrackComponent = ( props ) => {

    let {
        pointList,
        setPointList,
        maxDurationTime,
    } = props;

    let trackRef = useRef();
    let [ cutCursorDisplay, setCutCursorDisplay ] = useState( 'none' );
    let [ cutCursorLeft, setCutCursorLeft ] = useState( 0 );
    let [ cutCursorLeftProc, setCutCursorLeftProc ] = useState( 0 );
    let [ nextTimePoint, setNextTimePoint ] = useState( 0 );

    useEffect( () => {
        // console.dir( 'maxDurationTime' );
        // console.dir( maxDurationTime );

        // console.dir( 'cutCursorLeftProc' );
        // console.dir( cutCursorLeftProc );

        setNextTimePoint( Math.round( maxDurationTime * cutCursorLeftProc / 100 ) )
    }, [ cutCursorLeftProc ] );



    const track_move = ( e ) => {
        setCutCursorDisplay( 'flex' );
        let { clientX } = e;
        let trackRECT = trackRef.current.getBoundingClientRect()
        let track_left = trackRECT.left;
        let track_width = trackRECT.width;

        let left = 0;

        if( clientX <= track_left ){
            left = 0;
        }else if( clientX >= track_left + track_width ){
            left = track_width;
        }else{
            left = Math.round( clientX - track_left );
        };

        let left_proc = left * 100/track_width;

        setCutCursorLeft( left );
        setCutCursorLeftProc( left_proc );


    };

    const track_leave = () => {
        setCutCursorDisplay( 'none' );
    }



    return (
        <div className = 'CGETT_timeTrack'>
            <div className = 'CGETT_wrap'>

                <PointOfTimeBoundary 
                    timeSec = { 0 }
                />

                <div className = 'CGETT_track_wrap'>
                    <PointsTrack />

                    <div 
                        className = 'CGETT_track_time'
                        ref = { trackRef }
                        onMouseMove = { track_move }
                        onMouseLeave = { track_leave }
                    >
                        <div 
                            className = 'CGETT_cutCursor'
                            style = { {
                                display: cutCursorDisplay,
                                left: `${cutCursorLeft}px`
                            } }
                        >
                            <span>{ convert_sec_to_time( nextTimePoint ) }</span>
                        </div>

                    </div>
                </div>

                <PointOfTimeBoundary 
                    timeSec = { maxDurationTime } 
                />

            </div>
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
