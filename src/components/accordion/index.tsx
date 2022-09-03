import React from 'react';
import { useState } from 'react';
import BodyView from '../user/body-view';
import UserHeading from '../user/heading';
import './style.css';


const UserAccordion = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='acc-container'>
            <div onClick={() => {setIsOpen(!isOpen)}} className='acc-heading'>
                <UserHeading />
            </div>
            <div className={`acc-body ${isOpen ? 'open': ''}`}>
                <BodyView />
            </div>
        </div>
    )
}

export default UserAccordion;
