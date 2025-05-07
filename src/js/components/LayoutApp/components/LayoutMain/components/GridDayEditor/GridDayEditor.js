
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GridDayEditor.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { EmptyTimeSegment } from './../EmptyTimeSegment/EmptyTimeSegment.js';
import { CompletedTimeSegment } from './../CompletedTimeSegment/CompletedTimeSegment.js';
import { UpdateOneDayGridList } from './../UpdateOneDayGridList/UpdateOneDayGridList.js';

import { set_max_height_em_for_empty_time_segment } from './../../../../vendors/set_max_height_em_for_empty_time_segment.js';


const GridDayEditorComponent = ( props ) => {

    let {
    } = props;

    let refEd = useRef();

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        set_max_height_em_for_empty_time_segment( refEd.current.parentElement );
        setIsReady( true );
    }, [] );


    return (
       <div 
            className = 'gridDayEditor'
            ref = { refEd }
        >
            { isReady? (
                <UpdateOneDayGridList>
                    <EmptyTimeSegment 
                        startTime =     { 0 }
                        durationTime =  { 60 }
                    />

                    <CompletedTimeSegment 
                        id =            { 111 }
                        firstSegmentId = { 111 }
                        eventId =       { 6 }
                        notes =         { 'строки снять' }
                        isKeyPoint =    { true }
                        startTime =     { 300 }
                        durationTime =  { 1000 }
                    />

                    <EmptyTimeSegment 
                        startTime =     { 1300 }
                        durationTime =  { 85100 }
                    />

                </UpdateOneDayGridList>

            ): '' }
       </div>
    )

};

export function GridDayEditor( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GridDayEditorComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
