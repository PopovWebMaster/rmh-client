
import React, { useState }   from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddGridEventButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { CP_ButtonComponent } from './../../../CP_ButtonComponent/CP_ButtonComponent.js';
import { AddNewGridEventComponent } from './../AddNewGridEventComponent/AddNewGridEventComponent.js';

const AddGridEventButtonComponent = ( props ) => {

    let {
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }
        
    
    return (
        <>
            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '35em'
                height =    '80vh'
                title = 'Новое событие сетки'
            >
                <AddNewGridEventComponent 
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />

            </AlertWindowContainer>
    
            <CP_ButtonComponent 
                title =         { 'Добавить' }
                icon =          { 'icon-plus' }
                clickHandler =  { click }
            />
    
        </>
    )

};

export function AddGridEventButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AddGridEventButtonComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
