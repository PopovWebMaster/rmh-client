
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveCChangesButton.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { CP_SaveButtonComponent } from './../../../CP_SaveButtonComponent/CP_SaveButtonComponent.js';

const SaveCChangesButtonComponent = ( props ) => {

    let {
        categoryesIsChanged,
        currentPage,
        categoryList,
        setCategoryList,
        setCategoryesIsChanged,
        setSpinnerIsActive,

    } = props;

    const click = () => {
        if( categoryesIsChanged ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/save-category-list`,
                data: { 
                    list: categoryList,
                },
                callback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setCategoryesIsChanged( false );
                        setCategoryList( response.list )
                    };

                },
            });
            
        };

    }
    
    return (
        <CP_SaveButtonComponent 
            isChanged = { categoryesIsChanged }
            clickHandler = { click }
        />
    )

};

export function SaveCChangesButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveCChangesButtonComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
