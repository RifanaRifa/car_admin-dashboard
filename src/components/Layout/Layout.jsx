import React from 'react'
import Router from '../../routers/Router';
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../TopNav/Topnav';

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main_layout">
                <Topnav />
                <div className="content">
                    <Router />
                </div>
            </div>

        </div>

    );
};

export default Layout;