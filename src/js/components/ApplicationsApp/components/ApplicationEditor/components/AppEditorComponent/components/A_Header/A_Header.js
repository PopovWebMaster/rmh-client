
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_Header.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { InputAppNum } from './../InputAppNum/InputAppNum.js';

import { get_app_type_title } from './../../vendors/get_app_type_title.js';
import { get_app_type_color } from './../../vendors/get_app_type_color.js';


const A_HeaderComponent = ( props ) => {

    let {
        currentAppType,
        currentAppName,
    } = props;

    return (
        <div className = 'A_Header'>
            <h4>Заявка №:</h4>

            <InputAppNum />

            <h4 className = 'A_Header_name'>{ currentAppName }</h4>

            <div className = 'A_Header_type'>
                <span
                    style = {{
                        backgroundColor: get_app_type_color( currentAppType )
                    }}
                >{ get_app_type_title( currentAppType ) }</span>
            </div>

        </div>
    )

};

export function A_Header( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_HeaderComponent
            { ...props }
            currentAppNum = { application.currentAppNum }
            currentAppName = { application.currentAppName }
            currentAppType = { application.currentAppType }



            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
