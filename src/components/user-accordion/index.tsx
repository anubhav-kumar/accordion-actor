import { useState } from 'react';
import BodyEditView from './user/body-edit-view';
import UserHeading from './user/heading';
import './style.css';
import { userAccordion, userHeading } from '../../data-types';
import Icon from '../icons';


const UserAccordion = (props: userAccordion) => {
    const {first, last, picture, updateData, deleteIndex, dataIndex, isEditable} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [accordionLevelData, setAccordionLevelData] = useState({});
    const updateAccordionLevelData = (newData: userHeading) => {
        setAccordionLevelData({
            ...accordionLevelData,
            ...newData
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
                <BodyEditView isEditMode={isEditMode} {...props} updateData={updateAccordionLevelData}/>
            </div>
            {isEditMode 
                ? (
                    <div className='body-actions'>
                        <div onClick={onSaveClick}><Icon name='save'/></div>
                        <div onClick={() => {setEditMode(false)}}><Icon name='cancel'/></div>
                    </div>
                ) 
                : (
                    <div className='body-actions'>
                        <div onClick={() => deleteIndex(dataIndex)}><Icon name='delete' /></div>
                        {isEditable && (<div onClick={() => {setEditMode(true)}}><Icon name='edit' /></div>)}
                    </div>
                )
            }
        </div>
    )
}

export default UserAccordion;
