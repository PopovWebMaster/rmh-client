
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddSeriesComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';


const AddSeriesComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ numFromValue, setNumFromValue ] = useState( 1 );
    let [ numToValue, setNumToValue ] = useState( 1 );

    const change_num_from = ( e ) => {
        setNumFromValue( e.target.value )
    }

    const change_num_to = ( e ) => {
        setNumToValue( e.target.value )
    }

    return (
        <div className = 'addSeriesComponent'>

            <div className = 'ASC_item'>
                <h3>Номер серии:</h3>

                <div className = 'ASC_series_num_wrap'>
                    <span>от:</span>
                    <input 
                        type = 'number'
                        value = { numFromValue }
                        onChange = { change_num_from }
                    />

                    <span>до:</span>
                    <input 
                        type = 'number'
                        value = { numToValue }
                        onChange = { change_num_to }
                    />

                </div>

            </div>




        </div>
        
    )

};

export function AddSeriesComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddSeriesComponentComponent
            { ...props }
            currentAppNum =     { application.currentAppNum }
            currentAppName =    { application.currentAppName }
            currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
