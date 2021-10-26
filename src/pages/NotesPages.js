import notes from '../assets/data';
import ListItem from '../components/ListItem';

const NotesPages = () => {
  return (
    <div>
      {notes.map(note => (
        <ListItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesPages;
