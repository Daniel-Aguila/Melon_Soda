import React from 'react'
import {Header} from './Header.comp'
import {Footer} from './Footer.comp'


//It has to be named "children" otherwise whatever is in that variable does not appear
export const DefaultLayout = ({children}) => {
    return(
        <div className="default-layout">
            <header className="header">
                <Header/>
            </header>
            <main className="main">{children}</main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
};