import { useState } from 'react';
import BodyEditView from '../user/body-edit-view';
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
                <BodyEditView isEditMode />
            </div>
        </div>
    )
}

export default UserAccordion;
