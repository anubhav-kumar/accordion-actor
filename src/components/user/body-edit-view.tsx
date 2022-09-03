import BodyEdit from "./body-edit";
import BodyView from "./body-view";

type bodyEditViewPropType = {
    isEditMode: boolean
};

const BodyEditView = (props: bodyEditViewPropType) => {
    const {isEditMode} = props;
    return isEditMode ? <BodyEdit /> : <BodyView /> ;
}

export default BodyEditView;