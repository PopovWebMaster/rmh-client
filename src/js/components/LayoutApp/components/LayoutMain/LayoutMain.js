
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { NavLink } from "react-router";

import './LayoutMain.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../PageContainer/PageContainer.js';


import { ROUTE } from './../../../../config/routes.js';

const LayoutMainComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;
    
    return (
        <div className = ''>

            {/* <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/` }
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span>Главная</span>
            </NavLink>
            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LOGOUT.KEY_POINTS }` }
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span>не Главная</span>
            </NavLink> */}
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
