
type headers = {
    heading: string,
    subHeading: string
};

const Heading = (props: headers) => {
    const { heading, subHeading } = props;
    return (
        <div>
            <h1>{heading}</h1>
            <h6>{subHeading}</h6>
        </div>
    )
}

export default Heading;
