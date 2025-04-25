// AddEventComponent



import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddEventComponent.scss';

import { selectorData as layoutSlice, setEventList }    from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

// import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { EVENT_TYPE, EVENT_NAME_NOT_SELECTED } from './../../../../../../config/events.js';


const AddEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        currentPage,

        categoryList,

        setSpinnerIsActive,
        setEventList,

    } = props;

    let [ name, setName ] = useState( '' );
    let [ notes, setNotes ] = useState( '' );
    let [ eventType, setEventType ] = useState( EVENT_TYPE.FILE ); // block
    let [ categoryIsOpen, setCategoryIsOpen ] = useState( false );
    let [ categoryNameValue, setCategoryNameValue ] = useState( EVENT_NAME_NOT_SELECTED );
    let [ categoryIdValue, setCategoryIdValue ] = useState( null );

    useEffect( () => {
        if( isOpen === false ){
            setName( '' );
            setNotes( '' );
            setEventType( EVENT_TYPE.FILE );
            setCategoryNameValue( EVENT_NAME_NOT_SELECTED );
            setCategoryIdValue( null );
            setCategoryIsOpen( false );
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
        if( name.trim() !== '' ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/add-new-event`,
                data: { 
                    eventName:  name,
                    eventNotes: notes,
                    eventType:  eventType, // file block
                    categoryId: categoryIdValue,
                },

                callback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setEventList( response.list );
                        setIsOpen( false );
                    };

                },
            });



        };
    }

    const categoryClick = ( name, id ) => {
        setCategoryNameValue( name );
        setCategoryIdValue( id );
        setCategoryIsOpen( false );
    }

    const createCategoryList = ( arr ) => {
        let li = arr.map( ( item, index ) => {
            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        onClick = { () => {
                            categoryClick( EVENT_NAME_NOT_SELECTED, null );
                        } }
                    >{ EVENT_NAME_NOT_SELECTED }</li>
                    <li
                        
                        onClick = { () => {
                            categoryClick( item.name, item.id );
                        } }
                    >{ item.name }</li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => {
                            categoryClick( item.name, item.id );
                        } }
                    >{ item.name }</li>
                );
            };


        } );

        return li;

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
                        className = { eventType === EVENT_TYPE.FILE? 'isActive': 'noActive' }
                        onClick = { () => { setEventType( EVENT_TYPE.FILE ) } }
                    >Файл</span>

                    <span 
                        className = { eventType === EVENT_TYPE.BLOCK? 'isActive': 'noActive' }
                        onClick = { () => { setEventType( EVENT_TYPE.BLOCK ) } }
                    >Блок</span>

                </div>
                
            </div>

            <div className = 'LEAEC_item'
                
            >
                <h3>Дополнительная информация:</h3>
                <input 
                    type =      'text'
                    className = 'LEAEC_input_text'
                    maxLength = '255'
                    value =     { notes }
                    onChange =  { changeNotes }
                    placeholder = '16+, курение, алкоголь... всё, что нельзя забыть, тут пишем'
                />
            </div>

            <div className = 'LEAEC_item'>
                <h3>Категория:</h3>
                <div 
                    className = 'LEAEC_item_category'
                    onMouseLeave = { () => { setCategoryIsOpen( false ) } }
                >
                    <h4>{ categoryNameValue }</h4>
                    <div 
                        className = 'LEAEC_CDD_btn'
                        onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                    >
                        <span className = { `LEAEC_CDD_btn_icon ${categoryIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                    </div>

                    { categoryIsOpen? (
                        <ul className = 'LEAEC_CDD_list'>
                            { createCategoryList( categoryList ) }
                        </ul>
                    ): '' }
                    
                </div>
            </div>

            <div className = 'LEAEC_item'>
                <div className = 'LEAEC_item_create'>

                    <span 
                        className = { name.trim()  !== ''? 'icon-plus LEAEC_create_isActive': 'icon-plus ' }
                        onClick = { create }
                    ><span>Добавить</span></span>
                </div>
            </div>
            
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
            categoryList = { layout.categoryList }

            currentPage = { navigation.currentPage }
            // // categoryList = { layout.categoryList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }


        />
    );


}
