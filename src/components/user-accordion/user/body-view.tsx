import { userDetailsEditProps } from '../../../data-types';
import './style.css';

const BodyView = (props: userDetailsEditProps) => {
    const {age, gender, country, description} = props;
    return (
        <div className='body-container'>
            <div className='body-info'>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Age</div>
                    <div className='body-kv-value'>{age}</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Gender</div>
                    <div className='body-kv-value'>{gender}</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Country</div>
                    <div className='body-kv-value'>{country}</div>
                </div>
            </div>
            <div className='body-details'>
                <div className='body-kv-key'>Description</div>
                <p className='body-kv-value'>{description}</p>
            </div>
        </div>
    )
}

export default BodyView;
