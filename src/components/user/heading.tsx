import './style.css';

type userHeadingProps = {
    firstName: string
    lastName: string
    picture: string
}

const UserHeading = (props: userHeadingProps) => {
    const {firstName, lastName, picture} = props;
    return (
        <div className='userheading-container'>
            <div className='userheading-image-name'>
                <div className='userheading-image' style={{backgroundImage: `url('${picture}')`}} />
                <div className='userheading-name'>{`${firstName} ${lastName}`}</div>
            </div>
            <div className='userheading-toggle'>Open / Close</div>
        </div>
    );
}

export default UserHeading;
