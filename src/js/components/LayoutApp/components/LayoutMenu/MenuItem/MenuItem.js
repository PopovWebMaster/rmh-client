

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './MenuItem.scss';

import { selectorData as companySlice } from './../../../../../redux/companySlice.js';

import { ROUTE } from './../../../../../config/routes.js';

const MenuItemComponent = ( props ) => {

    let {
        icon,
        title,
    } = props;
    
    return (
        <div className = 'LM_MenuItem'>
            <span className = { icon }></span>
            <span className = 'title'>{ title }</span>

           
        </div>
    )

};

export function MenuItem( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuItemComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
