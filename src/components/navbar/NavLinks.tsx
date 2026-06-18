"use client"
import React, { FC } from 'react';
import NavDropdown from './NavDropDown';

export interface link {
    name: string;
    path: string;
    children?: link[];
}



interface Props {
    links: link[]
    activeTab: number
}

const NavLinks: FC<Props> = ({ links, activeTab }) => {
    return (
        <ul className={"hidden xl:flex gap-[36px]"}>
            {links.map((link, index) =>
                <li key={index}>
                    <NavDropdown link={link} active={activeTab === index} />
                </li>
            )}
        </ul>
    );
};

export default NavLinks;