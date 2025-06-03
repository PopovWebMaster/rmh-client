

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemCategory.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../../../redux/navigationSlice.js';

import { SelectedCategory } from './../../../../../../../SelectedCategory/SelectedCategory.js';

const ItemCategoryComponent = ( props ) => {

    let {
        categoryId,
        setCategoryId,
    } = props;

    
    return (
        <div className = 'ANAppl_category'>

            <SelectedCategory 
                categoryId = { categoryId }
                setCategoryId = { setCategoryId }
            />
            
        </div>

    )

};

export function ItemCategory( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <ItemCategoryComponent
            { ...props }

            applicationList = { application.applicationList }
            currentPage = { navigation.currentPage }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
