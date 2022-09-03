import { useState } from 'react';
import './style.css';

type accordionProps = {
    children: JSX.Element
};

const Accordion = (props: accordionProps) => {
    const {children} = props;
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='acc-container'>
            <div className='acc-heading'>
                <h1>Heading</h1>
                <div className='acc-state' onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? 'CLOSE': 'OPEN'}</div>
            </div>
            <div className={`acc-body ${isOpen ? 'open': ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Accordion;
