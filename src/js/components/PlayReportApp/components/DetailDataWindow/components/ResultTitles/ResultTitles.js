
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setDetailDataWindowIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ResultTitles.scss';


const ResultTitlesComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    useEffect( () => {
        console.dir( 'ResultTitles' );
    }, [] );







    return (

        <div className = 'DDW_ResultTitles'>
ResultTitles
        </div>
        
    )

};


export function ResultTitles( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultTitlesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
