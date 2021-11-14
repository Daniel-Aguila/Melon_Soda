import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';

export const PrivateRoute = ({children, ...rest}) =>{
    //For now we assume the user is already logged in
    const isAuth = true
    return(
        <Route
            render = {() => 
            isAuth ? children: <Redirect to='/'/>
            }
        />
    )
}