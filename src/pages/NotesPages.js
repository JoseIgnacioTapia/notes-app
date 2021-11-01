import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import ListItem from '../components/ListItem';
import { NotesHeader, NotesList } from './NotesStyles.js';
import AddButton from '../components/AddButton';
import MessageState from './Messages';

const NotesPages = () => {
  const { notes, isLoading, httpError } = useContext(NotesContext);

  if (isLoading) {
    return (
      <MessageState>
        <p>Loading. . .</p>
      </MessageState>
    );
  }

  if (httpError) {
    return (
      <MessageState error>
        <p>{httpError} 🤨</p>
      </MessageState>
    );
  }

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

      <AddButton />
    </div>
  );
};

export default NotesPages;
