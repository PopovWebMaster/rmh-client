
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setResultPointsSec } from './../../../../../../redux/playReportSlice.js';

import './ResultTitles.scss';

import { Points } from './components/Points/Points.js';

import { convert_ms_to_time } from './../../../../../../helpers/convert_ms_to_time.js';

const ResultTitlesComponent = ( props ) => {

    let {
        filteredList,
        resultPointsSec,

    } = props;

let [ val, setVal ] = useState( '' );

    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        return `${arr[0]}`;

    }

    const get_row = ( date, startTime ) => {
        let { YYYY_MM_DD } = date;
        let { ms } = startTime;

        let arr = [];

        for( let i = 0; i < resultPointsSec.length; i++ ){
            let ms_point = ( resultPointsSec[ i ] * 1000 ) + ms;
            arr.push( trim_sec_ms( convert_ms_to_time( ms_point ) ) )
        };

        let points_str = arr.join( ', ' );

        let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
        
        let result = date_str + '\t' + points_str + '\n';
        return result;


    }
    

    useEffect( () => {

        let arr = [];

        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                date,
            } = filteredList[ i ];

            if( type === 'movie' ){

                arr.push( get_row( date, startTime ) );
                
            };
        };

        let str = '';
        for( let i = 0; i < arr.length; i++ ){
            str = `${ str } ${arr[ i ]}`;
        };

        setVal( str );

    }, [ filteredList ] );






    return (

        <div className = 'DDW_ResultTitles'>

            <Points />



            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

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
            resultPointsSec = { playReport.resultPointsSec }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setResultPointsSec = { ( val ) => { dispatch( setResultPointsSec( val ) ) } }


        />
    );


}
