
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneEventTypeFile.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

const OneEventTypeFileComponent = ( props ) => {

    let {

    } = props;



    return (

        <div className = 'LE_OneEventTypeFile' >
            <div className = 'LE_OneEventTypeFile_wrap'>
                

            </div>
        </div>

    )

};

export function OneEventTypeFile( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <OneEventTypeFileComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // categoryesIsChanged = { layout.categoryesIsChanged }
            // currentPage = { navigation.currentPage }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
