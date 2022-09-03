import { useState } from 'react';
import BodyEditView from '../user/body-edit-view';
import UserHeading from '../user/heading';
import './style.css';

type userData = {
    id: number,
    first: string,
    last: string,
    dob: string,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string
}

const UserAccordion = (props: userData) => {
    const {first, last, picture, dob, gender, email, country, description, id} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='acc-container'>
            <div onClick={() => {setIsOpen(!isOpen)}} className='acc-heading'>
                <UserHeading firstName={first} lastName={last} picture={picture}/>
            </div>
            <div className={`acc-body ${isOpen ? 'open': ''}`}>
                <BodyEditView isEditMode={false} {...props}/>
            </div>
        </div>
    )
}

export default UserAccordion;
