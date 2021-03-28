import React from 'react';
import { VscAccount,VscMail,VscHome } from "react-icons/vsc";

export const NavBarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <VscHome/>,
        cName: 'nav-text',
        subNav : [
            {
            title: 'H-TEST1',
            path: '/hTest1',
            cName: 'nav-subText',
            },
            {
            title: 'H-TEST2',
            path: '/hTest2',
            cName: 'nav-subText',
            },
            {
            title: 'H-TEST3',
            path: '/hTest2',
            cName: 'nav-subText',
            },
        ]
    },
    {
        title: 'Account',
        path: '/account',
        icon: <VscAccount/>,
        cName: 'nav-text',
        subNav : [
            {
            title: 'A-TEST1',
            path: '/aTest1',
            cName: 'nav-subText',
            },
            {
            title: 'A-TEST2',
            path: '/aTest2',
            cName: 'nav-subText',
            },
            {
            title: 'A-TEST3',
            path: '/aTest2',
            cName: 'nav-subText',
            },
        ]
    },
    {
        title: 'Mail',
        path: '/mail',
        icon: <VscMail/>,
        cName: 'nav-text',
        subNav : [
            {
            title: 'M-TEST1',
            path: '/mTest1',
            cName: 'nav-subText',
            },
            {
            title: 'M-TEST2',
            path: '/mTest2',
            cName: 'nav-subText',
            },
            {
            title: 'M-TEST3',
            path: '/mTest2',
            cName: 'nav-subText',
            },
        ]
    },
   
    
]