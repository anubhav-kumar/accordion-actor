import { useState } from 'react';
import BodyEditView from './user/body-edit-view';
import UserHeading from './user/heading';
import './style.css';
import { userAccordion, userHeading } from '../../data-types';

const UserAccordion = (props: userAccordion) => {
    const {first, last, picture, updateData, deleteIndex, dataIndex} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [accordionLevelData, setAccordionLevelData] = useState({first, last});
    const updateAccordionLevelData = (newData: userHeading) => {
        setAccordionLevelData({
            first: newData.first,
            last: newData.last
        });
    }
    const onSaveClick = () => {
        updateData({dataIndex, ...accordionLevelData});
        setEditMode(false);
    }
    return (
        <div className='acc-container'>
            <div onClick={() => {setIsOpen(!isOpen)}} className='acc-heading'>
                <UserHeading first={first} last={last} picture={picture} isOpen={isOpen} isEditMode={isEditMode} updateData={updateAccordionLevelData} />
            </div>
            <div className={`acc-body ${isOpen ? 'open': ''}`}>
                <BodyEditView id={0} isEditMode={isEditMode} {...props}/>
            </div>
            {isEditMode 
                ? (
                    <div className='body-actions'>
                        <button onClick={onSaveClick}>Save</button>
                        <button onClick={() => {setEditMode(false)}}>Close</button>
                    </div>
                ) 
                : (
                    <div className='body-actions'>
                        <button onClick={() => deleteIndex(dataIndex)}>Delete</button>
                        <button onClick={() => {setEditMode(true)}}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserAccordion;
