
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './LoginPage.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { send_request_to_server } from './../../helpers/send_request_to_server.js';

import { ROUTE } from './../../config/routes.js';

const LoginPageComponent = ( props ) => {

    let {

    } = props;

    let [ email, setEmail ] = useState( '' );
    let [ password, setPassword ] = useState( '' );

    const changeEmail = ( e ) => {
        let val = e.target.value;
        setEmail( val );

    };

    const changePassword = ( e ) => {
        let val = e.target.value;
        setPassword( val );

    };

    const validateEmail = ( val ) => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( filter.test( val )){
            return true;
        }else{
            alert( `Логин должен быть действующим е-мейл адресом` );
            return false;
        }
    };

    const validatePassword = ( val ) => {
        
        let errors = [];
        if ( val.length < 8 ) {
            errors.push("Ваш пароль должен содержать не менее 8 символов"); 
        };
        // if (val.search(/[a-z]/i) < 0) {
        //     errors.push("Ваш пароль должен содержать хотя бы одну букву.");
        // };
        // if (val.search(/[0-9]/) < 0) {
        //     errors.push("Ваш пароль должен содержать хотя бы одну цифру."); 
        // };
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        };

        const regex = /^\w+$/;
        let isValid = regex.test( val );
        if( isValid === false ){
            alert( 'Не правильные логин или пароль' );
        };


        return isValid;
    }


    const send = () => {
        let email_trim = email.trim();
        let password_trim = password.trim();

        if( validateEmail( email_trim ) ){
            if( validatePassword( password_trim ) ){

                send_request_to_server({
                    route: 'login-by-post',
                    data: {
                        email: email_trim,
                        password: password_trim,
                        // email: email.trim(),
                        // password: password.trim(),
                    },
                    callback: ( response ) => {

                        if( response.ok ){
                            if( response.userData.position === 'admin' ){
                                window.location.href = HOST_TO_API_SERVER;
                            }else{
                                let company = response.userData.company[ 0 ];
                                window.location.href = `${HOST_TO_API_SERVER}/${company}/${ROUTE.PAGE.MAIN}` ;
                            };
                        }else{
                            alert( response.message );
                        };
                    },
                });

            }else{
                // alert( `Не правильные логин или пароль` );
            };
        }else{
            // alert( `Логин должен быть действующим е-мейл адресом` );
        };

    };

    return (
        <PageContainer className = 'loginPage'>

            <div className = 'loginPage_wrap'>

                <div className = 'loginPage_item'>
                    <h2>Логин:</h2>
                    <input 
                        type =      'email'
                        className = ''
                        value =     { email }
                        onChange =  { changeEmail }
                    />
                </div>

                <div className = 'loginPage_item'>
                    <h2>Пароль:</h2>
                    <input 
                        type =      'password'
                        className = ''
                        value =     { password }
                        autoComplete = 'current-password'
                        minLength = { 6 }
                        maxLength = { 20 }

                        onChange =  { changePassword }
                    />

                    <div className = 'btn'>
                        <span
                            onClick = { send }
                        >Отправить</span>
                    </div>
                </div>


            </div>


        </PageContainer>
    

    )

};

export function LoginPage( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <LoginPageComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
