

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ApplicationList.scss';

import { selectorData as applicationSlice } from './../../../../redux/applicationSlice.js';
import { OneApplication } from './components/OneApplication/OneApplication.js';


const ApplicationListComponent = ( props ) => {

    let {
        applicationList,
    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                category_id,
                id,
                name,
                notes,
                num,
                type,
            } = item
            
            return (
                <OneApplication 
                    key =           { index }
                    category_id =   { category_id }
                    id =            { id }
                    name =          { name }
                    notes =         { notes }
                    num =           { num }
                    type =          { type }
                />
            );
        } );

        return div;

    };




    
    return (
        <div className = 'applicationList'>
            <div className = 'AL_wrap'>
                { create( applicationList ) }
            </div>
            
        </div>
    )

};

export function ApplicationList( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationListComponent
            { ...props }
            applicationList = { application.applicationList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
