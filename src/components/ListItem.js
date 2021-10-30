import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import Item from './ListItemStyles';
import { getTitle } from '../helpers/getTitle';
import { getDate } from '../helpers/getDate';
import { getContent } from '../helpers/getContent';

const ListItem = ({ note }) => {
  const { getNote } = useContext(NotesContext);

  const requestNoteHandler = () => {
    getNote(note.id);
  };

  return (
    <Link to={`/note/${note.id}`}>
      <Item onClick={requestNoteHandler}>
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
