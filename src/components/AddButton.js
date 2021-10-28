import { Link } from 'react-router-dom';
import { ReactComponent as AddIcon } from '../assets/add.svg';
import classes from './AddButton.module.css';

const AddButton = () => {
  return (
    <Link to="/note/new" className={classes['floating-button']}>
      <AddIcon />
    </Link>
  );
};

export default AddButton;
