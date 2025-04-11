
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../redux/playReportSlice.js';

import './PlayReportList.scss';

import { SetFilteredList } from './../SetFilteredList/SetFilteredList.js';

import { ItemMovie } from './components/ItemMovie/ItemMovie.js';
import { ItemEmpty } from './components/ItemEmpty/ItemEmpty.js';


const PlayReportListComponent = ( props ) => {

    let {
        filteredList,
    } = props;




    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
        let result = '';
            switch( item.type ){
                case 'movie':
                    result = <ItemMovie item = { item } key = { index }/>
                    break;
                case 'empty':
                    result = <ItemEmpty item = { item } key = { index }/>
                    break;
            };

            return result;
        } );
        return div;
    };
    
    return (

        <SetFilteredList>

            
            
            <div className = 'PR_PlayReportList'>

                


                { create( filteredList ) }

            </div> 
        </SetFilteredList>

    )

};

export function PlayReportList( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <PlayReportListComponent
            { ...props }
            filteredList = { playReport.filteredList }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
