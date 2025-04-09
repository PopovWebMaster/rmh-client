
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './FilterPrefix.scss';


const FilterPrefixComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PR_FilterPrefix'>
            PR_FilterPrefix
        </div>


    )

};

export function FilterPrefix( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <FilterPrefixComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
