import './style.css';

const BodyView = () => {
    return (
        <div className='body-container'>
            <div className='body-info'>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Age</div>
                    <div className='body-kv-value'>23</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Gender</div>
                    <div className='body-kv-value'>Prefer Not to Say</div>
                </div>
                <div className='body-info-kv'>
                    <div className='body-kv-key'>Country</div>
                    <div className='body-kv-value'>India</div>
                </div>
            </div>
            <div className='body-details'>
                <div className='body-kv-key'>Description</div>
                <p className='body-kv-value'>Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. </p>
            </div>
            <div className='body-actions'>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default BodyView;
