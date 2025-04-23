
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddCategoryComponent.scss';


import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';


const AddCategoryComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ name, setName ] = useState( '' );
    let [ prefix, setPrefix ] = useState( '' );
    let [ colorText, setColorText ] = useState( '#000000' );
    let [ colorBG, setColorBG ] = useState( '#ffffff' );

    useEffect( () => {
        if( isOpen === false ){
            setName( '' );
            setPrefix( '' );
            setColorText( '#000000' );
            setColorBG( '#ffffff' );

        };
    }, [ isOpen ]);



    const changeName = ( e ) => {
        let val = e.target.value;
        setName( val );

    }

    const changePrefix = ( e ) => {
        let val = e.target.value;
        setPrefix( val );
    }

    const changeColorText = ( e ) => {
        let val = e.target.value;
        setColorText( val );

    }

    const changeColorGB = ( e ) => {
        let val = e.target.value;
        setColorBG( val );

    }


    const create = () => {
        if( name !== '' && prefix !== '' ){
            // alert( 'create' );

            setIsOpen( false );
        };
    }
    



    return (

        <div className = 'LC_addCategoryComponent' >

            <div className = 'LCACC_item'>
                <h3>Название:</h3>
                <input 
                    type =      'text'
                    className = 'LCACC_input_text'
                    value =     { name }
                    onChange =  { changeName }
                />
            </div>

            <div className = 'LCACC_item'>
                <h3>Префикс:</h3>
                <input 
                    type =      'text'
                    className = 'LCACC_input_text'
                    value =     { prefix }
                    onChange =  { changePrefix }
                />
            </div>

            <div className = 'LCACC_item'>
                <h3>
                    <span>Цвет текста:</span>
                    <input 
                        type =      'color'
                        value =     { colorText }
                        onChange =  { changeColorText }
                    />
                </h3>
                

                <h3>
                    <span>Цвет фона: </span>
                    <input 
                        type =      'color'
                        value =     { colorBG }
                        onChange =  { changeColorGB }
                    />
                </h3>
                
            </div>


            <div className = 'LCACC_item'>
                <div className = 'LCACC_item_example'>
                    <span 
                        className = 'LCACC_text_example'
                        style = {{
                            color: colorText,
                            backgroundColor: colorBG,
                        }}
                    >{ name }</span>

                </div>
            </div>


            <div className = 'LCACC_item'>
                <div className = 'LCACC_create'>

                    <span 
                        className = { name !== '' && prefix !== ''? 'icon-plus LCACC_create_isActive': 'icon-plus ' }
                        onClick = { create }
                    ><span>Добавить</span></span>

                </div>


            </div>

            
            
            
        </div>

    )

};

export function AddCategoryComponent( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddCategoryComponentComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
