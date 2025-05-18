
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutGridEventTimeTrack.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AppearanceOfGridEventParts } from './components/AppearanceOfGridEventParts/AppearanceOfGridEventParts.js';
import { TimeTrackButtons } from './components/TimeTrackButtons/TimeTrackButtons.js';
import { TimeTrack } from './components/TimeTrack/TimeTrack.js';
import { AddNewPoint } from './components/AddNewPoint/AddNewPoint.js';
import { RemovePoint } from './components/RemovePoint/RemovePoint.js';
import { get_cut_point_list } from './vendors/get_cut_point_list.js';

const CutGridEventTimeTrackComponent = ( props ) => {

    let {
        gridEventsParts,
        maxDurationTime,
        startTime,
        setGridEventsParts,


    } = props;

    let [ pointList, setPointList ] = useState( [] );

    useEffect( () => {

        setPointList( get_cut_point_list( gridEventsParts ) );

    }, [ gridEventsParts ] );

//             cutPart: null,
//             dayNum: 0,
//             durationTime: 180,
//             eventId: 1,
//             firstSegmentId: null,
//             id: 2,
//             isKeyPoint: true,
//             notes: null,
//             pushIt: null,
//             startTime: 0,

    return (
        <div className = 'cutGridEventTimeTrack'>

            <AppearanceOfGridEventParts 
                gridEventsParts = { gridEventsParts }
            />

            <TimeTrack 
                pointList = { pointList }
                setPointList = { setPointList }
                maxDurationTime = { maxDurationTime }
                gridEventsParts = { gridEventsParts }
                setGridEventsParts = { setGridEventsParts }
            />
            {/* <AddNewPoint /> */}
            {/*         
    
                Не удалять !!!!!

            <TimeTrackButtons />
            
            
            <RemovePoint /> */}

        </div>
    )

};

export function CutGridEventTimeTrack( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <CutGridEventTimeTrackComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
