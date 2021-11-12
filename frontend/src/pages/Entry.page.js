import React from 'react'
import './Entry.style.css'
import '../components/Login.comp'
import { LoginForm } from '../components/Login.comp';

export const Entry = () =>{
    return (
        <div className="entry-page">
            <div className="jumbotron">
            <LoginForm/>
            </div>
        </div>
    )
};