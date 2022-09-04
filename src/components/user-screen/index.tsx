import { useState } from "react"
import { userAccordion } from "../../data-types";
import data from "../../data/celebrities"
import { transformInputData } from "../../utils/common";
import ConfirmAlert from "../confirmation-alert";
import UserAccordion from "../user-accordion"

const UserDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const transformedData = data.map(singleRow => transformInputData(singleRow));
    const [localData, setLocalData] = useState(transformedData);
    const [isConfirmAlert, setIsConfirmAlert] = useState(false);
    const [deleteIndexSelected, setDeleteIndexSelected] = useState(-1);
    const updateLocalState = (updatedData: userAccordion) => {
        const {dataIndex} = updatedData;
        const localDataCopy = [...localData];
        localDataCopy[dataIndex] = {
            ...localDataCopy[dataIndex],
            ...updatedData
        }
        setLocalData(localDataCopy);
    }
    const openDeleteConfirmModal = (indexToDelete: number) => {
        setDeleteIndexSelected(indexToDelete);
        setIsConfirmAlert(true);
    }
    const deleteIndex = () => {
        const localDataCopy = [...localData];
        setLocalData(localDataCopy.filter((dt, idx) => {
            return idx !== deleteIndexSelected
        }));
        setDeleteIndexSelected(-1);
        setIsConfirmAlert(false);
    }
    const filteredData = localData.filter(
        dt => {return searchTerm 
            ? (dt.first.includes(searchTerm) || dt.last.includes(searchTerm) || dt.description.includes(searchTerm))
            : true}
        );
    const [expansionLock, setExpansionLock] = useState(false);
    const [expandedAccordionIndex, setExpandedAccordionIndex] = useState(0);
    const expandCollapse = (dataIndex: number) => {
        if (!expansionLock) {
            if (expandedAccordionIndex === dataIndex) {
                setExpandedAccordionIndex(-1);
            } else {
                setExpandedAccordionIndex(dataIndex);
            }
        }
    }
     
    return (
        <>
            <input onChange={event => {setSearchTerm(event.target.value)}} />
            <ConfirmAlert title={"Are you sure you wanna delete the User ?"} isOpen={isConfirmAlert} onConfirmFn={deleteIndex} onDenyFn={() => {setIsConfirmAlert(false)}} />
            {filteredData.map((dt, idx) => {return <UserAccordion setExpansionLock={setExpansionLock} expandCollapse={expandCollapse} isExpanded={idx === expandedAccordionIndex} deleteIndex={openDeleteConfirmModal} isOpen={false} updateData={updateLocalState} key={`idx-${idx}`} {...dt} dataIndex={idx} />})}
        </>
    )
    
    
}

export default UserDetails;
