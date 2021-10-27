import { Link } from 'react-router-dom';
import Item from './ListItemStyles';

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <Item>
        <h3>{note.body}</h3>
      </Item>
    </Link>
  );
};

export default ListItem;
