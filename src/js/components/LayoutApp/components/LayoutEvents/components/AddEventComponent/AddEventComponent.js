// AddEventComponent



import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddEventComponent.scss';

import { selectorData as layoutSlice, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

// import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';


const AddEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        currentPage,

        setSpinnerIsActive,
        setCategoryList,

    } = props;

    let [ name, setName ] = useState( '' );
    let [ notes, setNotes ] = useState( '' );
    let [ eventType, setEventType ] = useState( 'file' ); // block


    useEffect( () => {
        if( isOpen === false ){
            setName( '' );
            setNotes( '' );
            setEventType( 'file' );


        };
    }, [ isOpen ]);



    const changeName = ( e ) => {
        let val = e.target.value;
        setName( val );

    }

    const changeNotes = ( e ) => {
        let val = e.target.value;
        setNotes( val );

    }




    const create = () => {
        // if( name !== '' && prefix !== '' ){

        //     setSpinnerIsActive( true );

        //     send_request_to_server({
        //         route: `${currentPage}/add-new-category`,
        //         data: { 
        //             categoryName:       name,
        //             categoryPrefix:     prefix,
        //             categoryColorText:  colorText,
        //             categoryColorBG:    colorBG,
        //         },

        //         callback: ( response ) => {
        //             console.dir( 'response' );
        //             console.dir( response );

        //             if( response.ok ){
        //                 setSpinnerIsActive( false );
        //                 setCategoryList( response.list );
        //                 setIsOpen( false );
        //             };

        //         },
        //     });



        // };
    }
    



    return (

        <div className = 'LE_AddEventComponent' >



            <div className = 'LEAEC_item'>
                <h3>Название:</h3>
                <input 
                    type =      'text'
                    className = 'LEAEC_input_text'
                    maxLength = '255'
                    value =     { name }
                    onChange =  { changeName }
                />
            </div>

            <div className = 'LEAEC_item'>
                <h3>Тип:</h3>
                <div className = 'LEAEC_item_type'>

                    <span 
                        className = { eventType === 'file'? 'isActive': 'noActive' }
                        onClick = { () => { setEventType( 'file' ) } }
                    >Файл</span>

                    <span 
                        className = { eventType === 'block'? 'isActive': 'noActive' }
                        onClick = { () => { setEventType( 'block' ) } }
                    >Блок</span>


                </div>
                
            </div>


            <div className = 'LEAEC_item'>
                <h3>Дополнительная информация:</h3>
                <input 
                    type =      'text'
                    className = 'LEAEC_input_text'
                    maxLength = '255'
                    value =     { notes }
                    onChange =  { changeNotes }
                />
            </div>
{/* 
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


            </div> */}

            
            
            
        </div>

    )

};

export function AddEventComponent( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddEventComponentComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }

            // currentPage = { navigation.currentPage }
            // // categoryList = { layout.categoryList }

            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
