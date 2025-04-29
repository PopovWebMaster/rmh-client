
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneEventTypeFile.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
// import { get_category_by_id } from './../../../../vendors/get_category_by_id.js';

import { EventNonesInput } from './../EventNonesInput/EventNonesInput.js';
import { EventCategoryItem } from './../EventCategoryItem/EventCategoryItem.js';
import { EventRemoveItem } from './../EventRemoveItem/EventRemoveItem.js';
import { EVENT_TYPE } from './../../../../../../config/layout.js';

const OneEventTypeFileComponent = ( props ) => {

    let {
        id,
        name,
        category,
        notes,
        type,
    } = props;

    const get_style = ( type, category ) => {
        let result = {
            backgroundColor: '',
            color: '',
        };
        if( type === EVENT_TYPE.FILE ){
            result.backgroundColor = category.colorBG;
            result.color = category.colorText;

        }else if( type === EVENT_TYPE.BLOCK ){
            result.backgroundColor = '#ffffff17';
            result.color = '#ffffff';
            result.borderColor = category.colorBG;
        };

        return result;

    }

    return (

        <div className = 'LE_OneEventTypeFile' >
            <div className = 'LE_OneEventTypeFile_wrap_'>

                <div className = 'LE_OETF_type'>
                    <span 
                        className = { type === EVENT_TYPE.FILE? 'LE_OETF_type_file': type === EVENT_TYPE.BLOCK? 'LE_OETF_type_block': '' }
                    >
                        { type === EVENT_TYPE.FILE? 'Файл': type === EVENT_TYPE.BLOCK? 'Блок': '' }
                    </span>
                </div>

                <div className = 'LE_OETF_prefix'>
                    <input 
                        type =      'text'
                        value =     { category.prefix }
                        onChange =  { () => {} }
                    />
                </div>

                <div className = 'LE_OETF_name'>
                    <input 
                        type =      'text'
                        value =     { name }
                        onChange =  { () => {} }
                        style = { get_style( type, category ) }
                    />
                </div>

                <EventNonesInput 
                    id = { id }
                    notes = { notes }
                />

                <EventCategoryItem 
                    id = { id }
                    category = { category }
                />

                <EventRemoveItem id = { id } />
                

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
