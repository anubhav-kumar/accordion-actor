import { useState } from 'react';
import BodyEditView from './user/body-edit-view';
import UserHeading from './user/heading';
import './style.css';
import { userAccordion, userHeading } from '../../data-types';
import Icon from '../icons';
import { isEmptyObj } from '../../utils/common';


const UserAccordion = (props: userAccordion) => {
    const {first, last, picture, updateData, deleteIndex, dataIndex, isEditable, expandCollapse, isExpanded, setExpansionLock} = props;
    const [isEditMode, setEditMode] = useState(false);
    const setEditModeAndExpansionLock = (editMode: boolean) => {
        setExpansionLock(editMode)
        setEditMode(editMode)
    }
    const [accordionLevelData, setAccordionLevelData] = useState({});
    const updateAccordionLevelData = (newData: userHeading) => {
        setAccordionLevelData({
            ...accordionLevelData,
            ...newData
        });
    }
    const onSaveClick = () => {
        updateData({dataIndex, ...accordionLevelData});
        setEditModeAndExpansionLock(false);
    }
    return (
        <div className='acc-container'>
            <div onClick={() => {expandCollapse(dataIndex)}} className='acc-heading'>
                <UserHeading first={first} last={last} picture={picture} isOpen={isExpanded} isEditMode={isEditMode} updateData={updateAccordionLevelData} />
            </div>
            <div className={`acc-body ${isExpanded ? 'open': ''}`}>
                <BodyEditView isEditMode={isEditMode} {...props} updateData={updateAccordionLevelData}/>
            </div>
            {isEditMode 
                ? (
                    <div className='body-actions'>
                        {!isEmptyObj(accordionLevelData) && <div onClick={onSaveClick}><Icon name='save'/></div>}
                        <div onClick={() => {setEditModeAndExpansionLock(false)}}><Icon name='cancel'/></div>
                    </div>
                ) 
                : (
                    <div className='body-actions'>
                        <div onClick={() => deleteIndex(dataIndex)}><Icon name='delete' /></div>
                        {isEditable && (<div onClick={() => {setEditModeAndExpansionLock(true)}}><Icon name='edit' /></div>)}
                    </div>
                )
            }
        </div>
    )
}

export default UserAccordion;
