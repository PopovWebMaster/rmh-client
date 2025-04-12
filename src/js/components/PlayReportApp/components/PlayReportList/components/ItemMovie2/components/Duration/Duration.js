// Duration


import React, { useState, useRef } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Duration.scss';

const DurationComponent = ( props ) => {

    let {
        fileDuration,
        segmentRealDuration,
        markIn,
    } = props;
    
    let [ isOpen, setIsOpen ] = useState( false );


    // let hours_2_ms = 7200000;
    let hours_2_ms = 5400000;


    const trim_ms = ( str ) => {
        let arr = str.split('.');
        return arr[0];
    }

    const getFileWidth = () => {
        let result = Math.round( fileDuration.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }

    const getSegmentWidth = () => {
        let result = Math.round( segmentRealDuration.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }

    const getLeftWidth = () => {
        let result = Math.round( markIn.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }



    return (
        <div 
            className = { `PRL_ItemMovie2_Duration ${isOpen? 'isOpen': '' }` }
            onClick = { () => { setIsOpen( !isOpen ) } }
            onMouseLeave = { () => { setIsOpen( false ) } }
        >

            <div className = 'PRL_Duration_scale'>
                <div 
                    className = 'PRL_file_len'
                    style = { { width: getFileWidth() } }
                >

                </div>

                <div 
                    className = 'PRL_segment_len'
                    style = { { 
                        width: getSegmentWidth(),
                        left: getLeftWidth(),
                     } }
                >

                </div>


            </div>

            <div className = 'PRL_Duration_data'>
                <ul>
                    <li>
                        <span>File: </span>
                        <span>{ trim_ms( fileDuration.time ) }</span>
                    </li>
                    <li>
                        <span>Segment: </span>
                        <span>{ trim_ms( segmentRealDuration.time ) }</span>
                    </li>
                    <li>
                        <span>Segment start: </span>
                        <span>{ trim_ms( markIn.time ) }</span>
                    </li>
                    
                </ul>

            </div>
           





            
        </div> 

    )

};

export function Duration( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DurationComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
