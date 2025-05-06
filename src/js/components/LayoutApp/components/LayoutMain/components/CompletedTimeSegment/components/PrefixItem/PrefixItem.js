
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PrefixItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


const PrefixItemComponent = ( props ) => {

    let {
        category_id,
        categoryListById,
    } = props;

    let [ prefix, setPrefix ] = useState( '' );

    useEffect( () => {
        if( categoryListById[ category_id ] ){
            setPrefix( categoryListById[ category_id ].prefix );
        };
    }, [ category_id ]);

    return (
        <div className = 'CTS_PrefixItem'>
            <input 
                type = 'text'
                value = { prefix }
                onChange = { () => {} }
            />
        </div>
    )

};

export function PrefixItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PrefixItemComponent
            { ...props }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
