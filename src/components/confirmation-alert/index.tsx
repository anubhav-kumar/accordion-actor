import { confirmAlertProps } from '../../data-types';
import './style.css';

const ConfirmAlert = (props: confirmAlertProps) => {
    const {title, onConfirmFn, onDenyFn, isOpen} = props;
    if (isOpen) {
        return (
            <div className='confirm-container'>
                <div className='confirm-content'>
                    <p>{title}</p>
                    <div className='confirm-action'>
                        <div onClick={() => (onDenyFn())}>
                            <button className='back'>Back</button>
                        </div>
                        <div onClick={() => (onConfirmFn())}>
                            <button className='confirm'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default ConfirmAlert;
