import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { iconProps } from '../../data-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Icon = (props: iconProps) => {
    const {name} = props;
    switch(name) {
        case 'downArrow':
            return <KeyboardArrowDownIcon />
        case 'upArrow': 
            return <KeyboardArrowUpIcon />
        case 'delete': 
            return <DeleteIcon color={'error'} />
        case 'edit': 
            return <EditIcon color={'primary'}/>
        case 'save': 
            return <CheckCircleIcon color={'success'} />
        case 'cancel': 
            return <CancelIcon color={'error'} />
        default:
            return null;
    }
}

export default Icon