import React from 'react';
import {Table} from 'react-bootstrap';
export const TicketTable = ({tickets}) =>{
    return (
        <div>
            <h1 className="text-center">Recent Tickets</h1>
            {/* Table Header */}
            <Table variant="dark" hover bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subjects</th>
                        <th>Status</th>
                        <th>Opened Date</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {/* <td></td> define a cell in the table  <tr></tr> is table row*/}
                    {/* If there is a ticket and tickets.map (not sure what it does 100%) row gives us access
                    to all the properties of a ticket from the json file 
                    (row,i) i gives you the index of the ticket
                    
                    The ? makes it an if statement*/}
                    {tickets.length ? tickets.map((row,i)=>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                    //The : signifies the 'else' part of the statemenet
                    //Where there is no tickets, it shows No Tickets
                    ):
                    <tr>
                        {/* colSpan allows it to span 4 columns */}
                        <td colSpan="4" className="text-center">No Tickets</td>
                    </tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}