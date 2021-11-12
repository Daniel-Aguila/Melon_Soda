import React from 'react';
import {Table} from 'react-bootstrap';
export const TicketTable = () =>{
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
                    <tr>
                        <td>1</td>
                        <td>Lost Package</td>
                        <td>Client Response Pending</td>
                        <td>11/11/2021</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lost Package</td>
                        <td>Client Response Pending</td>
                        <td>11/11/2021</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lost Package</td>
                        <td>Client Response Pending</td>
                        <td>11/11/2021</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lost Package</td>
                        <td>Client Response Pending</td>
                        <td>11/11/2021</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}