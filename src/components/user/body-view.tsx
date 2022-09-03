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

const BodyView = (props: bodyEditViewPropType) => {
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
            <div className='body-actions'>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default BodyView;
