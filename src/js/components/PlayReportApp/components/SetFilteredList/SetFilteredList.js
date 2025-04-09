
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setFilteredList } from './../../../../redux/playReportSlice.js';

import './SetFilteredList.scss';


const SetFilteredListComponent = ( props ) => {

    let {
        entireList,
        setFilteredList,
        children,
    } = props;

    useEffect( ()  => {
        setFilteredList( entireList );
    }, [entireList] );
    
    return (
        <>{ children }</>
    )

};

export function SetFilteredList( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SetFilteredListComponent
            { ...props }
            entireList = { playReport.entireList }
            setFilteredList = { ( callback ) => { dispatch( setFilteredList( callback ) ) } }

        />
    );


}
