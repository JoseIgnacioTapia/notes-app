import notes from '../assets/data';
import ListItem from '../components/ListItem';
import { NotesHeader, NotesList } from './NotesStyles.js';

const NotesPages = () => {
  return (
    <div>
      <NotesHeader>
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </NotesHeader>

      <NotesList>
        {notes.map(note => (
          <ListItem key={note.id} note={note} />
        ))}
      </NotesList>
    </div>
  );
};

export default NotesPages;
