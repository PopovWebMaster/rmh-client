// CutItem


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CutItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { CutSegmentButton } from './../../../CutSegmentButton/CutSegmentButton.js';


const CutItemComponent = ( props ) => {

    let {
        id,
        firstSegmentId,
    } = props;
    let [ isOpen, setIsOpen ] = useState( false );


    const click = () => {
        setIsOpen( true );
    };

    


    return (
        <div className = 'CTS_CutItem'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'CTS_CutItem_remove'>
                    CTS_CutEditorItem
                </div>
    
            </AlertWindowContainer>

            <CutSegmentButton 
                clickHandler = { click }
            />
        </div>
    )

};

export function CutItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CutItemComponent
            { ...props }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
