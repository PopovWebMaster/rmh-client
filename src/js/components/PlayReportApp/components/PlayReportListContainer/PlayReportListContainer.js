
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../redux/playReportSlice.js';

import './PlayReportListContainer.scss';

 
const PlayReportListContainerComponent = ( props ) => {

    let {
        children,
        entireList,
    } = props;

    let [ height, setHeight ] = useState( 0 );

    let containerRef = useRef();

    useEffect(() => {
        let elem = containerRef.current;
        let { y } = elem.getBoundingClientRect();
        let winHeight = document.documentElement.clientHeight;
        let vh = 100 - Math.round( y * 100 / winHeight ) - 1;
        setHeight( vh );

    }, []);
    
    return (
        <div 
            className = 'PRL_PlayReportListContainer'
            ref = { containerRef }
            style = {{ height: `${height}vh`}}
        >
            { entireList.length > 0? children: '' }
        </div>


    )

};

export function PlayReportListContainer( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <PlayReportListContainerComponent
            { ...props }
            entireList = { playReport.entireList }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

