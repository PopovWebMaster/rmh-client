
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddNewApplicationButton.scss';

import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../AlertWindowContainer/AlertWindowContainer.js';
import { AP_ControlButton } from './../AP_ControlButton/AP_ControlButton.js';
import { ANApplContainer } from './components/ANApplContainer/ANApplContainer.js';


const AddNewApplicationButtonComponent = ( props ) => {

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
            height =    '23em'
            title = 'Создать новую заявку'
        >
            <ANApplContainer 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <AP_ControlButton 
            title =         { 'Добавить' }
            icon =          { 'icon-plus' }
            clickHandler =  { click }
        />

    </>)

};

export function AddNewApplicationButton( props ){

    // const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddNewApplicationButtonComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
