

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Week.scss';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import { Day } from './../Day/Day.js';



const WeekComponent = ( props ) => {

    let {
        
    } = props;
    
    return (
        <div className = 'LP_Week'>
            <Day 
                dayName =   { 'Пн' }
                dayNum =    { 0 }
            />

            <Day 
                dayName =   { 'Вт' }
                dayNum =    { 1 }
            />

            <Day 
                dayName =   { 'Ср' }
                dayNum =    { 2 }
            />

            <Day 
                dayName =   { 'Чт' }
                dayNum =    { 3 }
            />

            <Day 
                dayName =   { 'Пт' }
                dayNum =    { 4 }
            />

            <Day 
                dayName =   { 'Сб' }
                dayNum =    { 5 }
            />

            <Day 
                dayName =   { 'Вс' }
                dayNum =    { 6 }
            />
            

            
        </div>
    )

};

export function Week( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <WeekComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
