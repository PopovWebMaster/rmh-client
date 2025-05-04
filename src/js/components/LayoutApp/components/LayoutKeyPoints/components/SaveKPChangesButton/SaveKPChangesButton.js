
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveKPChangesButton.scss';

import { selectorData as layoutSlice, setPointListIsChanged, setWeekKeyPointList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { CP_SaveButtonComponent } from './../../../CP_SaveButtonComponent/CP_SaveButtonComponent.js';

const SaveKPChangesButtonComponent = ( props ) => {

    let {
        pointListIsChanged,
        currentPage,
        weekKeyPointList,
        setPointListIsChanged,
        setSpinnerIsActive,

    } = props;

    const click = () => {
        if( pointListIsChanged ){

            setSpinnerIsActive( true );
    
            let list = get_point_list_for_server( weekKeyPointList );
    
            send_request_to_server({
                route: `${currentPage}/save-key-point-list`,
                data: { 
                    list,
                },
                callback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );
    
                    setSpinnerIsActive( false );
                    setPointListIsChanged( false );
                },
            });
        };
    }
    
    return (

        <CP_SaveButtonComponent 
            isChanged = { pointListIsChanged }
            clickHandler = { click }
        />
    )

};

export function SaveKPChangesButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveKPChangesButtonComponent
            { ...props }
            pointListIsChanged = { layout.pointListIsChanged }
            currentPage = { navigation.currentPage }
            weekKeyPointList = { layout.weekKeyPointList }

            setPointListIsChanged = { ( val ) => { dispatch( setPointListIsChanged( val ) ) } }
            setWeekKeyPointList = { ( val ) => { dispatch( setWeekKeyPointList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
