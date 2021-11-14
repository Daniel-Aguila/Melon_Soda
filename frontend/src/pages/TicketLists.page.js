import React from 'react';
import {TicketListTable} from '../components/TicketList.comp'
import { useState } from 'react';
import { useEffect } from 'react';
import tickets from '../assets/data/dummy-tickets.json'
import { DefaultLayout } from '../layout/DefaultLayout';

export const TicketLists = () =>{
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(tickets);

    useEffect(()=>{},[search, result]);

    const searchTicket = (search_) => {
        const displayTickets = tickets.filter((row)=>row.subject.toLowerCase().includes(search_.toLowerCase()));
        
        setResult(displayTickets);
        console.log(displayTickets);
    };

    const handleOnChange = event =>{
        const {value} = event.target

        setSearch(value)
        searchTicket(value)
    };

    return(
        <div>
            <DefaultLayout>
            <TicketListTable handleOnChange={handleOnChange} search={search} displayTicket={result}/>
            </DefaultLayout>
        </div>
    )
}