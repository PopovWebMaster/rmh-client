
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddCategoryComponent.scss';

import { selectorData as layoutSlice, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';
import { AllColorsList } from './../AllColorsList/AllColorsList.js';

// import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';


const AddCategoryComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        currentPage,

        setSpinnerIsActive,
        setCategoryList,

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
        if( name.trim() !== '' && prefix.trim() !== '' ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/add-new-category`,
                data: { 
                    categoryName:       name,
                    categoryPrefix:     prefix,
                    categoryColorText:  colorText,
                    categoryColorBG:    colorBG,
                },

                callback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setCategoryList( response.list );
                        setIsOpen( false );
                    };

                },
            });



        };
    }
    



    return (

        <div className = 'LC_addCategoryComponent' >

            <div className = 'LCACC_item'>
                <h3>Название:</h3>
                <input 
                    type =      'text'
                    className = 'LCACC_input_text'
                    maxLength = '255'
                    value =     { name }
                    onChange =  { changeName }
                />
            </div>

            <div className = 'LCACC_item'>
                <h3>Префикс:</h3>
                <input 
                    type =      'text'
                    className = 'LCACC_input_text'
                    maxLength = '255'
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
                    <div className = 'allColors'>
                        <AllColorsList 
                            setValue = { ( val ) => { setColorText( val ) } }
                        />
                    </div>
                </h3>

                <h3>
                    <span>Цвет фона: </span>
                    <input 
                        type =      'color'
                        value =     { colorBG }
                        onChange =  { changeColorGB }
                    />
                    <div className = 'allColors'>
                        <AllColorsList 
                        setValue = { ( val ) => { setColorBG( val ) } }
                        />
                    </div>
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
                        className = { name.trim()  !== '' && prefix.trim() !== ''? 'icon-plus LCACC_create_isActive': 'icon-plus ' }
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
            // categoryList = { layout.categoryList }

            setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
