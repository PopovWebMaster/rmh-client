
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveEventChangesButton.scss';


import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';


const SaveEventChangesButtonComponent = ( props ) => {

    let {
        // pointListIsChanged,

        // categoryesIsChanged,
        // currentPage,
        // categoryList,




        // setCategoryList,
        // setCategoryesIsChanged,
        // setSpinnerIsActive,
        // setWeekKeyPointList,

    } = props;

    const click = () => {
        // if( categoryesIsChanged ){

            // setSpinnerIsActive( true );
    
            // // let list = get_point_list_for_server( weekKeyPointList );
    
            // send_request_to_server({
            //     route: `${currentPage}/save-category-list`,
            //     data: { 
            //         list: categoryList,
            //     },
            //     callback: ( response ) => {
            //         console.dir( 'response' );
            //         console.dir( response );
            //         if( response.ok ){
            //             setSpinnerIsActive( false );
            //             setCategoryesIsChanged( false );
            //             setCategoryList( response.list )
            //         };

            //     },
            // });
            
        // };

    }
    
    return (
        <div 
            className = { `LE_SaveEventChangesButton ${ false? 'isActive': ''}` }
            onClick = { click }
        >
            <span className = 'icon-floppy LE_btn_icon'></span>
            <span className = ''>Сохранить изменения</span>
        </div>
    )

};

export function SaveEventChangesButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveEventChangesButtonComponent
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
