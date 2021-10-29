import { Link } from 'react-router-dom';
import Item from './ListItemStyles';
import { getTitle } from '../helpers/getTitle';
import { getDate } from '../helpers/getDate';
import { getContent } from '../helpers/getContent';

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <Item>
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getDate(note)}</span>
          {getContent(note)}
        </p>
      </Item>
    </Link>
  );
};

export default ListItem;
