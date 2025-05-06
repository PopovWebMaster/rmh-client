
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EmptyTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { GrigItemWrap } from './../GrigItemWrap/GrigItemWrap.js';


import { get_height_em } from './vendors/get_height_em.js';


import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { AddNewGridEventComponent } from './../AddNewGridEventComponent/AddNewGridEventComponent.js';


const EmptyTimeSegmentComponent = ( props ) => {

    let {
        startTime,
        durationTime,

        gridEmptySegmentMaxHeightEm,
        gridEmptySegmentMinHeightEm,


    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const clickAdd = () => {
        setIsOpen( true );
    };

    return (
        <GrigItemWrap
            startTime = { startTime }
            durationTime = { durationTime }
        >

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

            <div 
                className = 'emptyTimeSegment'
                style = { { height: get_height_em( durationTime, gridEmptySegmentMinHeightEm, gridEmptySegmentMaxHeightEm ) } }
            >

                <div className = 'ETS_add'>
                    <span 
                        className = 'icon-plus'
                        onClick = { clickAdd }
                    ></span>
                </div>

            </div>
        </GrigItemWrap>

    )

};

export function EmptyTimeSegment( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EmptyTimeSegmentComponent
            { ...props }
            gridEmptySegmentMaxHeightEm = { layout.gridEmptySegmentMaxHeightEm }
            gridEmptySegmentMinHeightEm = { layout.gridEmptySegmentMinHeightEm }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
