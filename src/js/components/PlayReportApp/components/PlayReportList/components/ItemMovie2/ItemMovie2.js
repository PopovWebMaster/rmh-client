

import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ItemMovie2.scss';

import { DateItem } from './components/DateItem/DateItem.js';
import { Time } from './components/Time/Time.js';
import { FileData } from './components/FileData/FileData.js';
import { Duration } from './components/Duration/Duration.js';

const ItemMovie2Component = ( props ) => {

    let {
        item,
    } = props;

    
    return (
        <div className = 'PRL_ItemMovie2'>
            <DateItem date = { item.date }/>
            <Time startTime = { item.startTime }/>
            <FileData file = { item.file }/>
            <Duration 
                fileDuration =          { item.fileDuration }
                segmentRealDuration =   { item.segmentRealDuration }
                markIn =                { item.markIn }
            />

            
            {/* <Time 
                startTime = { item.startTime }
                date =      { item.date }

            />
            <FileData 
                file = { item.file }
            />

            <Duration 
                fileDuration = { item.fileDuration }
                segmentRealDuration = { item.segmentRealDuration }
                markIn = { item.markIn }
            
            /> */}

        </div> 

        

    )

};

export function ItemMovie2( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ItemMovie2Component
            { ...props }
            // searchValue = { playReport.searchValue }
            // calendarIsOpen = { playReport.calendarIsOpen }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
