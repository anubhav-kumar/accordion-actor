import { useState } from "react"
import { userAccordion } from "../../data-types";
import data from "../../data/celebrities"
import { transformInputData } from "../../utils/common";
import ConfirmAlert from "../confirmation-alert";
import UserAccordion from "../user-accordion"

const UserDetails = () => {
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
    if (localData && localData.length > 0) {
        return (
            <>
                <ConfirmAlert title={"Are you sure you wanna delete the User ?"} isOpen={isConfirmAlert} onConfirmFn={deleteIndex} onDenyFn={() => {setIsConfirmAlert(false)}} />
                {localData.map((dt, idx) => {return <UserAccordion deleteIndex={openDeleteConfirmModal} isOpen={false} updateData={updateLocalState} key={`idx-${idx}`} {...dt} dataIndex={idx} />})}
            </>
        )
    }
    return null;
}

export default UserDetails;
