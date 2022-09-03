import { useState } from 'react';
import { userDetailsEditProps } from '../../../data-types';
import './style.css';


const BodyEdit = (props: userDetailsEditProps) => {
    const {dob, gender, country, description, updateData} = props;
    const [genderDropdownValue, setGenderDropDownValue] = useState(gender);    
    const onNameUpdation = (event: any, fieldName: string) => {
        const value = event.target.value;
        updateData({[fieldName]: value})
        setGenderDropDownValue(value);
    }
    return (
        <div className='body-container'>
            <div className='body-info'>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Age</div>
                    <div className='body-kv-value'>{dob}</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Gender</div>
                    <select onChange={event => {onNameUpdation(event, 'gender')}} value={genderDropdownValue}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer-not-to-say">Prefer Not To say</option>
                    </select>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Country</div>
                    <input onChange={event => onNameUpdation(event, 'country')} type='string' defaultValue={country} className='body-kv-value' />
                </div>
            </div>
            <div className='body-details'>
                <div className='body-kv-key'>Description</div>
                <textarea onChange={event => onNameUpdation(event, 'description')} style={{width: '100%', height: '150px'}} className='body-kv-value' defaultValue={description} />
            </div>
        </div>
    )
}

export default BodyEdit;
