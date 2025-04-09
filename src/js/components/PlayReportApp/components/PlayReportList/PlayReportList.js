
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../redux/playReportSlice.js';

import './PlayReportList.scss';

import { SetFilteredList } from './../SetFilteredList/SetFilteredList.js';


const PlayReportListComponent = ( props ) => {

    let {

    } = props;
    
    return (

        <SetFilteredList>
            <div className = 'PR_PlayReportList'>


            </div> 
        </SetFilteredList>

    )

};

export function PlayReportList( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <PlayReportListComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
