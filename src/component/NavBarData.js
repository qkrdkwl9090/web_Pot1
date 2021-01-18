import React from 'react';
import { VscAccount,VscMail,VscHome,VscSignOut } from "react-icons/vsc";

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <VscHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <VscAccount/>,
        cName: 'nav-text'
    },
    {
        title: 'Mail',
        path: '/mail',
        icon: <VscMail/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <VscSignOut/>,
        cName: 'nav-text'
    },
    
]