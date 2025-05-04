
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddEventButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';

import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { AddEventComponent } from './../AddEventComponent/AddEventComponent.js';

import { CP_ButtonComponent } from './../../../CP_ButtonComponent/CP_ButtonComponent.js';

const AddEventButtonComponent = ( props ) => {

    let {

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
            height =    '34em'
            title = 'Новое событие'
        >
            <AddEventComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <CP_ButtonComponent 
            title =         { 'Добавить' }
            icon =          { 'icon-plus' }
            clickHandler =  { click }
        />

    </>)

};

export function AddEventButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddEventButtonComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
