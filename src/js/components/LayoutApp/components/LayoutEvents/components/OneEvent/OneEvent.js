
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneEvent.scss';

import { selectorData as layoutSlice }      from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../redux/navigationSlice.js';

import { EventNonesInput } from './../EventNonesInput/EventNonesInput.js';
import { EventCategoryItem } from './../EventCategoryItem/EventCategoryItem.js';
import { EventRemoveItem } from './../EventRemoveItem/EventRemoveItem.js';
import { EventNameInput } from './../EventNameInput/EventNameInput.js';
import { EventDurationItem } from './../EventDurationItem/EventDurationItem.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';

const OneEventComponent = ( props ) => {

    let {
        id,
        name,
        category,
        notes,
        type,
        durationTime,
    } = props;


    return (

        <div className = 'LE_OneEvent' >
            <div className = 'LE_OneEvent_wrap_'>

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

                <EventDurationItem 
                    id = { id }
                    durationTime = { durationTime }
                />

                <EventNameInput 
                    id =        { id }
                    name =      { name }
                    category =  { category }
                    type =      { type }
                />

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

export function OneEvent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <OneEventComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
