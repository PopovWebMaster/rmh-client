
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveGridChangesButton.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../redux/layoutSlice.js';

import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { CP_SaveButtonComponent } from './../../../CP_SaveButtonComponent/CP_SaveButtonComponent.js';


const SaveGridChangesButtonComponent = ( props ) => {

    let {
        gridDayEventsList,
        gridDayEventsIsChanges,

        currentPage,

        setSpinnerIsActive,
        setGridDayEventsList, 
        setGridDayEventsIsChanges,

    } = props;

    const click = () => {


        if( gridDayEventsIsChanges ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/save-grid-event-list`,
                data: { 
                    list: gridDayEventsList,
                },
                callback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setGridDayEventsList(response.list);
                        setGridDayEventsIsChanges( false );
                    };

                },
            });
            
        };

    }
    
    return (
        <CP_SaveButtonComponent 
            isChanged = { gridDayEventsIsChanges }
            clickHandler = { click }
        />
    )

};

export function SaveGridChangesButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveGridChangesButtonComponent
            { ...props }
            gridDayEventsList =         { layout.gridDayEventsList }
            gridDayEventsIsChanges =    { layout.gridDayEventsIsChanges }
            currentPage =               { navigation.currentPage }

            setSpinnerIsActive =        { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList =      { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }

        />
    );


}
