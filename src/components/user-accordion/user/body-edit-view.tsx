import { userDetailsEditProps } from "../../../data-types";
import BodyEdit from "./body-edit";
import BodyView from "./body-view";


const BodyEditView = (props: userDetailsEditProps) => {
    const {isEditMode, updateData} = props;
    return isEditMode ? <BodyEdit {...props} updateData={updateData}/> : <BodyView {...props}/> ;
}

export default BodyEditView;