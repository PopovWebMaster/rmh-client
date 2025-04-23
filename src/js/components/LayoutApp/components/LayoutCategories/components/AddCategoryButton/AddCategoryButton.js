
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddCategoryButton.scss';


import { selectorData as layoutSlice, setCategoryesIsChanged, setWeekKeyPointList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

// import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { AddCategoryComponent } from './../AddCategoryComponent/AddCategoryComponent.js';


const AddCategoryButtonComponent = ( props ) => {

    let {

        // setWeekKeyPointList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }


    
    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '27em'
            height =    '24em'
            title = 'Новая категория'
        >
            <AddCategoryComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <div 
            className = 'LC_AddCategoryButton LC_Categories_btn_item isActive' 
            onClick = { click }
        >
            <span className = 'icon-plus LC_Categories_btn_icon'></span>
            <span className = 'LP_KeyPoints_btn_title'>Добавить</span>
        </div>

    </>)

};

export function AddCategoryButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddCategoryButtonComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
