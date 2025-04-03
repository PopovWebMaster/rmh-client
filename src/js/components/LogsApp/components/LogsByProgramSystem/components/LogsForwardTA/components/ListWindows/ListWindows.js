
import React, { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../redux/logsForwardTASlise.js';

import './ListWindows.scss';

import { add_event_mouse_down }  from './vendors/add_event_mouse_down.js'; 

const ListWindowsComponent = ( props ) => {

    let {

    } = props;

    let windowRef = useRef();
    let leftRef = useRef();
    let rightRef = useRef();
    let centerRef = useRef();




    const moveBorderCenter = ( e ) => {
        add_event_mouse_down( e, windowRef, leftRef, rightRef, centerRef );
    };

    useEffect( () => {
        let FTA_List_header = document.querySelector( '.FTA_List_header' );
        if( FTA_List_header ){
            let { height } = window.getComputedStyle( FTA_List_header );
            console.dir( height );
            centerRef.current.style.top = height;
        }

        

    }, [] );



    return (
        <div 
            className = 'FTA_ListWindows'
            ref = { windowRef }
        >

            <div 
                className = 'FTA_List_wrap'
                ref = { leftRef }
            >
                <div className = 'FTA_List_header'>
                    <span>Выделить всё</span>
                </div>
                <div className = 'FTA_List_body'>

                </div>
            </div>

            <div 
                className = 'FTA_List_vertical_btn'
                onMouseDown = { moveBorderCenter }
                onMouseUp = { () => {} }
                ref = { centerRef }
            ></div>

            <div 
                className = 'FTA_List_wrap'
                ref = { rightRef }
            >
                <div className = 'FTA_List_header'>
                    <span>Выделить всё</span>
                </div>
                <div className = 'FTA_List_body'>

                </div>
            </div>

        </div>
    )

};

export function ListWindows( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <ListWindowsComponent
            { ...props }
            logDateMain = { logsForwardTA.logDateMain }
            logDateBackup = { logsForwardTA.logDateBackup }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
