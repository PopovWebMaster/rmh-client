

import React, { useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectorData as playReportSlice,
    setMaxYear,
    setMaxMonth,
    setMinYear,
    setMinMonth
} from './../../../../redux/playReportSlice.js';

import { set_calendar_data } from './../../vendors/set_calendar_data.js';

const SetCalendarDataComponent = ( props ) => {

    let {
        children,
        setMaxYear,
        setMaxMonth,
        setMinYear,
        setMinMonth
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect(() => {

        let date = new Date();

        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        setMaxYear( year );
        setMaxMonth( month );
        setMinYear( 2023 );
        setMinMonth( 5 );

        set_calendar_data( year, month );


        setIsReady( true );

    }, []);


    return (<>{ isReady? children: '' }</>)

};

export function SetCalendarData( props ){

    // const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SetCalendarDataComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // calendarIsOpen = { playReport.calendarIsOpen }
            setMaxYear = { ( val ) => { dispatch( setMaxYear( val ) ) } }
            setMaxMonth = { ( val ) => { dispatch( setMaxMonth( val ) ) } }

            setMinYear = { ( val ) => { dispatch( setMinYear( val ) ) } }
            setMinMonth = { ( val ) => { dispatch( setMinMonth( val ) ) } }


           



        />
    );


}
