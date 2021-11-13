import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TicketListTable} from '../components/TicketList.comp'
import { useState } from 'react';
import { useEffect } from 'react';

export const TicketLists = () =>{
    const [search, setSearch] = useState('');

    useEffect(()=>{},[search]);

    const handleOnChange = event =>{
        const {name, value} = event.target

        switch(name){
            //Everytime it is an email/password, the value is set to its designated variable
            //using the setState function
            //for example, setEmail(value) where value = 'value_' will set the email variable to 'variable_'
            case 'search':
                setSearch(value)
                break
            default:
                break
        }
        console.log(name, value);
    };

    return(
        <div>
            <TicketListTable handleOnChange={handleOnChange} search={search}/>
        </div>
    )
}