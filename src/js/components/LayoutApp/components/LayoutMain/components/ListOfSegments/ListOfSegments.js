
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ListOfSegments.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { EmptyTimeSegment } from './../EmptyTimeSegment/EmptyTimeSegment.js';
import { CompletedTimeSegment } from './../CompletedTimeSegment/CompletedTimeSegment.js';

import { GRID_SEGMENT_TYPE } from './../../../../../../config/layout.js';

const ListOfSegmentsComponent = ( props ) => {

    let {
        gridOneDayList,
    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { type } = item;
            if( type === GRID_SEGMENT_TYPE.COMPLETED ){
                let {
                    id,
                    firstSegmentId,
                    eventId,
                    notes,
                    isKeyPoint,
                    startTime,
                    durationTime,
                } = item;

                return (
                    <CompletedTimeSegment 
                        key =               { index }
                        id =                { id }
                        firstSegmentId =    { firstSegmentId }
                        eventId =           { eventId }
                        notes =             { notes }
                        isKeyPoint =        { isKeyPoint }
                        startTime =         { startTime }
                        durationTime =      { durationTime }
                    />
                );
            }else if( type === GRID_SEGMENT_TYPE.EMPTY ){
                let {
                    startTime,
                    durationTime,
                } = item;
                return (
                    <EmptyTimeSegment 
                        key =           { index }
                        startTime =     { startTime }
                        durationTime =  { durationTime }
                    />
                );
            };

        } );

        return div;

    };

    return (
        <React.Fragment>
            { create( gridOneDayList ) }
        </React.Fragment>
    )

};

export function ListOfSegments( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ListOfSegmentsComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
