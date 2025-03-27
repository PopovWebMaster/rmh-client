
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice } from './../../../../redux/navigationSlice.js';
import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './MenuItemLeft.scss';

const MenuItemLeftComponent = ( props ) => {

    let {
        title,
        page,

        currentPage,
        currentCompanyAlias,

    } = props;
    


    return (
        <a 
            className = { `${page === currentPage? 'isActive': ''} menuItemLeft` }
            href = { `${HOST_TO_API_SERVER}/${currentCompanyAlias}/${page}` }
        >
            <span className = 'TMIL_icon'></span>
            <span className = 'TMIL_title'>{ title }</span>
        </a>
    )

};

export function MenuItemLeft( props ){

    const navigation = useSelector( navigationSlice );
    const company = useSelector( companySlice );


    // const dispatch = useDispatch();

    return (
        <MenuItemLeftComponent
            { ...props }
            currentPage = { navigation.currentPage }
            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
