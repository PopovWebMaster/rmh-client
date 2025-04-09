
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './Backligth.scss';


const BackligthComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PR_Backligth'>
            Backligth
        </div>


    )

};

export function Backligth( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <BackligthComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
