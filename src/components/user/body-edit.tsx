import './style.css';

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

const BodyEdit = (props: bodyEditViewPropType) => {
    const {dob, gender, country, description} = props;
    return (
        <div className='body-container'>
            <div className='body-info'>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Age</div>
                    <input defaultValue={dob} type='number' className='body-kv-value'/>
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
            <div className='body-actions'>
                <button>Save</button>
                <button>Close</button>
            </div>
        </div>
    )
}

export default BodyEdit;
