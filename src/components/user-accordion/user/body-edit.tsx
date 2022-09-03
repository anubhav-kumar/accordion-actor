import { userDetailsEditProps } from '../../../data-types';
import './style.css';


const BodyEdit = (props: userDetailsEditProps) => {
    const {dob, gender, country, description} = props;
    return (
        <div className='body-container'>
            <div className='body-info'>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Age</div>
                    <div className='body-kv-value'>{dob}</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Gender</div>
                    <select value={gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer-not-to-say">Prefer Not To say</option>
                    </select>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Country</div>
                    <input type='string' defaultValue={country} className='body-kv-value' />
                </div>
            </div>
            <div className='body-details'>
                <div className='body-kv-key'>Description</div>
                <textarea style={{width: '100%', height: '150px'}} className='body-kv-value' defaultValue={description} />
            </div>
        </div>
    )
}

export default BodyEdit;
