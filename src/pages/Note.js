import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import notes from '../assets/data';

const Note = ({ match }) => {
  let noteID = match.params.id;

  let note = notes.find(note => note.id === +noteID);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea value={note?.body}></textarea>{' '}
      {/* Show if  exist the element note */}
    </div>
  );
};

export default Note;
