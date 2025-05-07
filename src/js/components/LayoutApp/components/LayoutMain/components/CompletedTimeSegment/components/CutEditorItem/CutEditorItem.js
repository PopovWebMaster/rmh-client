
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CutEditorItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../../AlertWindowContainer/AlertWindowContainer.js';


const CutEditorItemComponent = ( props ) => {

    let {
        id,
        firstSegmentId,
    } = props;
    let [ isOpen, setIsOpen ] = useState( false );


    const click = () => {
        setIsOpen( true );
    };

    


    return (
        <div className = 'CTS_CutEditorItem'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'CTS_Event_remove'>
                    CTS_CutEditorItem
                </div>
    
            </AlertWindowContainer>


            <div 
                className = 'CTS_CutEditorItem_wrap'
                onClick = { click }
            >
                <span className = 'CTS_CutEditorItem_icon icon-scissors'></span>
                <span className = 'CTS_CutEditorItem_text'>Порезка</span>
            </div>
        </div>
    )

};

export function CutEditorItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CutEditorItemComponent
            { ...props }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
