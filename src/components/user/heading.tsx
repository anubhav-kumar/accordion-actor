import './style.css';

const UserHeading = () => {
    return (
        <div className='userheading-container'>
            <div className='userheading-image-name'>
                <div className='userheading-image' style={{backgroundImage: "url('https://randomuser.me/api/portraits/med/men/93.jpg')"}} />
                <div className='userheading-name'>Aidan Wang</div>
            </div>
            <div className='userheading-toggle'>Open / Close</div>
        </div>
    );
}

export default UserHeading;
