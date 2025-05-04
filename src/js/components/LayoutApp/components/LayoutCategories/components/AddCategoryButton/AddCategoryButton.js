
import React, { useState }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddCategoryButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';

import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { AddCategoryComponent } from './../AddCategoryComponent/AddCategoryComponent.js';
import { CP_ButtonComponent } from './../../../CP_ButtonComponent/CP_ButtonComponent.js';


const AddCategoryButtonComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }

    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '27em'
            height =    '24em'
            title = 'Новая категория'
        >
            <AddCategoryComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <CP_ButtonComponent 
            title =         { 'Добавить' }
            icon =          { 'icon-plus' }
            clickHandler =  { click }
        />

    </>)

};

export function AddCategoryButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddCategoryButtonComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
