
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice } from './../../../../redux/navigationSlice.js';

import './MenuItemLeft.scss';

// import { ROUTE } from './../../config/routes.js';



const MenuItemLeftComponent = ( props ) => {

    let {
        title,
        page,

        currentPage,
        currentCompany,

    } = props;
    


    return (
        <a 
            className = { `${page === currentPage? 'isActive': ''} menuItemLeft` }
            href = { `${HOST_TO_API_SERVER}/${currentCompany}/${page}` }
        >
            <span className = 'TMIL_icon'></span>
            <span className = 'TMIL_title'>{ title }</span>
        </a>
    )

};

export function MenuItemLeft( props ){

    const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <MenuItemLeftComponent
            { ...props }
            currentPage = { navigation.currentPage }
            currentCompany = { navigation.currentCompany }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
