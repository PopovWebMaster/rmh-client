
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './CalendarTable.scss';


const CalendarTableComponent = ( props ) => {

    let {
        monthCalendar,


    } = props;

    const click = ( item ) => {
        console.dir( item );

    }

    const create_tr = ( week, list ) => {

        let arr = [];
        for( let i = week * 7; i < ( week * 7 ) + 7; i++ ){
            arr.push( list[ i ] );
        };

        if( arr[0] === undefined ){
            return '';
        }else{

            let td = arr.map( ( item, index) => {
                let date = '';
                let className = '';
                if( item !== undefined ){
                    date = item.date;
                    className = item.file? 'isActive': '';
                };
                return ( 
                    <td
                        key = { index }
                        className = { className }
                        onClick = { () => { click( item ) } }
                    >{ date }</td>
                );
            } );

            return <tr>{ td }</tr>
        }

    }



    
    return (
        <div className = 'PR_Calendar_Table'>
            <table>
                <thead>
                    <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                    </tr>
                </thead>

                <tbody>
                    { create_tr( 0, monthCalendar ) }
                    { create_tr( 1, monthCalendar ) }
                    { create_tr( 2, monthCalendar ) }
                    { create_tr( 3, monthCalendar ) }
                    { create_tr( 4, monthCalendar ) }
                    { create_tr( 5, monthCalendar ) }


                    {/* <*>
                        { create_tr( 0,  ) }
                        {/* <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td> */}
                    {/* <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr> */}
                   
                </tbody>
                </table>

        </div>

    )

};

export function CalendarTable( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CalendarTableComponent
            { ...props }
            monthCalendar = { playReport.monthCalendar }

            // setCalendarIsOpen = { ( val ) => { dispatch( setCalendarIsOpen( val ) ) } }

        />
    );


}
