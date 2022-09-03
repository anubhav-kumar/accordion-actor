import { useState } from "react"
import data from "../../data/celebrities"
import UserAccordion from "../user-accordion"

const UserDetails = () => {
    const [localData, setLocalData] = useState(data);
    if (localData && localData.length > 0) {
        return (<>{localData.map((dt, idx) => {return <UserAccordion key={`idx-${idx}`} {...dt} />})}</>)
    }
    return null;
}

export default UserDetails;
