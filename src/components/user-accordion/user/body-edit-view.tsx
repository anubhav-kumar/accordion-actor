import BodyEdit from "./body-edit";
import BodyView from "./body-view";


type bodyEditViewPropType = {
    isEditMode: boolean
    id: number,
    first: string,
    last: string,
    dob: string,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string
};

const BodyEditView = (props: bodyEditViewPropType) => {
    const {isEditMode} = props;
    return isEditMode ? <BodyEdit {...props} /> : <BodyView {...props}/> ;
}

export default BodyEditView;