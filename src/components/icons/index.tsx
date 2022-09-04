import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { iconProps } from '../../data-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Icon = (props: iconProps) => {
    const {name} = props;
    switch(name) {
        case 'downArrow':
            return <KeyboardArrowDownIcon />
        case 'upArrow': 
            return <KeyboardArrowUpIcon />
        default:
            return null;
    }
}

export default Icon