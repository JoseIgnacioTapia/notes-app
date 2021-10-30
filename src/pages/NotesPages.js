import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { NotesHeader, NotesList } from './NotesStyles.js';
import AddButton from '../components/AddButton';

const NotesPages = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch(
        'https://notes-app-d2000-default-rtdb.firebaseio.com/notes.json'
      );
      const data = await response.json();

      const loadedNotes = [];

      for (const key in data) {
        loadedNotes.push({
          id: key,
          body: data[key].body,
          updated: data[key].updated,
        });
      }

      setNotes(loadedNotes);
    };

    getNotes();
  }, []);
  console.log(notes);

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
