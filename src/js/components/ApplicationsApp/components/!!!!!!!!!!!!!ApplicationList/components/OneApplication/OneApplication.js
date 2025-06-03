
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './OneApplication.scss';

import { selectorData as applicationSlice } from './../../../../../../redux/applicationSlice.js';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';
import { APPLICATION_TYPE } from './../../../../../../config/application.js';
import { ROUTE } from './../../../../../../config/routes.js';
import { OA_get_title_for_type } from './vendors/OA_get_title_for_type.js';

const OneApplicationComponent = ( props ) => {

    let {
        category_id,
        id,
        name,
        notes,
        num,
        type,

        currentCompanyAlias,

    } = props;

    let navigate = useNavigate();


    const click = () => {
        navigate( `/${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}/${id}` );
    };


    return (
        <div 
            className = 'oneApplication'
            onClick = { click }
        >
            <div className = 'OA_type'>
                <span className = { type }>{ OA_get_title_for_type( type ) }</span>
            </div>
            <div className = 'OA_name'>
                <span>{ name }</span>
            </div>
        </div>
    )

};

export function OneApplication( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );


    
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <OneApplicationComponent
            { ...props }
            applicationList = { application.applicationList }
            currentCompanyAlias = { company.currentCompanyAlias }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
