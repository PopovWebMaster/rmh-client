
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../redux/playReportSlice.js';

import './ListButtonsLeft.scss';

import { TimeScrollButtons } from './components/TimeScrollButtons/TimeScrollButtons.js';
 
 
const ListButtonsLeftComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PRL_ListButtonsLeft'>

            <div className = 'PRL_ListButtonsLeft_wrap'>

                
            </div>

            <TimeScrollButtons />
        </div>


    )

};

export function ListButtonsLeft( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ListButtonsLeftComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

