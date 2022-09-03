import { useState } from "react"
import { userAccordion } from "../../data-types";
import data from "../../data/celebrities"
import { transformInputData } from "../../utils/common";
import UserAccordion from "../user-accordion"

const UserDetails = () => {
    const transformedData = data.map(singleRow => transformInputData(singleRow));
    const [localData, setLocalData] = useState(transformedData);
    const updateLocalState = (updatedData: userAccordion) => {
        const {dataIndex} = updatedData;
        const localDataCopy = [...localData];
        localDataCopy[dataIndex] = {
            ...localDataCopy[dataIndex],
            ...updatedData
        }
        setLocalData(localDataCopy);
    }
    const deleteIndex = (indexToDelete: number) => {
        const localDataCopy = [...localData];
        setLocalData(localDataCopy.filter((dt, idx) => {
            return idx !== indexToDelete
        }));
    }
    if (localData && localData.length > 0) {
        return (<>{localData.map((dt, idx) => {return <UserAccordion deleteIndex={deleteIndex} isOpen={false} updateData={updateLocalState} key={`idx-${idx}`} {...dt} dataIndex={idx} />})}</>)
    }
    return null;
}

export default UserDetails;
