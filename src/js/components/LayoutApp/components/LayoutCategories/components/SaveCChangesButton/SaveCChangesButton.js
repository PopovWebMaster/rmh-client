// SaveCChangesButton


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveCChangesButton.scss';


import { selectorData as layoutSlice, setCategoryesIsChanged, setWeekKeyPointList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

// import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';



const SaveCChangesButtonComponent = ( props ) => {

    let {
        pointListIsChanged,

        categoryesIsChanged,
        currentPage,
        categoryList,





        setCategoryesIsChanged,
        setSpinnerIsActive,
        // setWeekKeyPointList,

    } = props;

    const click = () => {
        if( categoryesIsChanged ){

            setSpinnerIsActive( true );
    
            // let list = get_point_list_for_server( weekKeyPointList );
    
            send_request_to_server({
                route: `${currentPage}/save-category-list`,
                data: { 
                    list: categoryList,
                },
                callback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );
    
                    setSpinnerIsActive( false );
                    setCategoryesIsChanged( false );
    
    
                },
            });
            
        };

    }
    
    return (
        <div 
            className = { `LC_SaveCChangesButton LC_Categories_btn_item ${ categoryesIsChanged? 'isActive': ''}` }
            onClick = { click }
        >

            <span className = 'icon-floppy LC_Categories_btn_icon'></span>
            <span className = 'LP_KeyPoints_btn_title'>Сохранить изменения</span>


        </div>
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
            setWeekKeyPointList = { ( val ) => { dispatch( setWeekKeyPointList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
