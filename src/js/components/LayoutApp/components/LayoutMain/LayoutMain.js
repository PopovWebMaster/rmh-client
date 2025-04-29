
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { NavLink } from "react-router";

import './LayoutMain.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../PageContainer/PageContainer.js';


const LayoutMainComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'layoutMain'>


        </div>
    )

};

export function LayoutMain( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutMainComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
