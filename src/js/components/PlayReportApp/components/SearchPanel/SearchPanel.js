

import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../redux/playReportSlice.js';

import './SearchPanel.scss';

import { InputSearch } from './../InputSearch/InputSearch.js';
import { ButtonSearch } from './../ButtonSearch/ButtonSearch.js';
import { SearchByDate } from './../SearchByDate/SearchByDate.js';
import { ClearSearchInputButton } from './../ClearSearchInputButton/ClearSearchInputButton.js';
import { Calendar } from './../Calendar/Calendar.js';
import { SearchPeriod } from './../SearchPeriod/SearchPeriod.js';



const SearchPanelComponent = ( props ) => {

    let {
        searchFocus,
        calendarIsOpen,
    } = props;

    const searchHandler = () => {
        console.dir( 'searchHandler' );
    }
    
    return (
        <div className = 'PR_searchPanel'>
            <div className = { `PR_searchPanel_wrap ${searchFocus? 'isActive': ''} ${calendarIsOpen? 'calendarIsOpen': ''}` }>

                <InputSearch searchHandler = { searchHandler }/>
                <ClearSearchInputButton />
                <ButtonSearch searchHandler = { searchHandler }/>
                <SearchByDate />
                <Calendar />
                <SearchPeriod />

            </div>
        </div>

    )

};

export function SearchPanel( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchPanelComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
