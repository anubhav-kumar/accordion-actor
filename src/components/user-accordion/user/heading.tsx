import { userHeadingProps } from '../../../data-types';
import './style.css';


const UserHeading = (props: userHeadingProps) => {
    const {first, last, picture, isOpen, isEditMode, updateData} = props;
    const onNameUpdation = (event: any) => {
        const fullName = event.target.value;
        const [firstName, ...lastName] = fullName.split(" ");
        updateData({first: firstName, last: lastName.join(" ")})
    }
    return (
        <div className='userheading-container'>
            <div className='userheading-image-name'>
                <div className='userheading-image' style={{backgroundImage: `url('${picture}')`}} />
                {isEditMode ? <input onChange={onNameUpdation} type={'text'} defaultValue={`${first} ${last}`} />: <div className='userheading-name'>{`${first} ${last}`}</div>}
            </div>
            <div className='userheading-toggle'>{isOpen ? "Close" : "Open"}</div>
        </div>
    );
}

export default UserHeading;
