import notes from '../assets/data';

const Note = ({ match }) => {
  let noteID = match.params.id;

  let note = notes.find(note => note.id === +noteID);

  return (
    <div>
      <p>{note?.body}</p> {/* Show if  exist the element note */}
    </div>
  );
};

export default Note;
