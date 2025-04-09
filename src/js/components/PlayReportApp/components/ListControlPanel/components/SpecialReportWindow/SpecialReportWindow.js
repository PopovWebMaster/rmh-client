// SpecialReportWindow


import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './SpecialReportWindow.scss';


const SpecialReportWindowComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PR_SpecialReportWindow'>
            SpecialReportWindow
        </div>


    )

};

export function SpecialReportWindow( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SpecialReportWindowComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
