import { useState, useEffect, createContext } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  let urlGET = 'https://notes-app-d2000-default-rtdb.firebaseio.com/notes.json';

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(urlGET);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

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
      setIsLoading(false);
    };

    fetchNotes().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [urlGET, didSubmit]);

  const getNote = async noteID => {
    try {
      const response = await fetch(
        `https://notes-app-d2000-default-rtdb.firebaseio.com/notes/${noteID}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setNote(data);
    } catch (error) {
      setHttpError(error.message);
    }
  };

  const createNote = async () => {
    setNote(null);
    setDidSubmit(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://notes-app-d2000-default-rtdb.firebaseio.com/notes.json',
        {
          method: 'POST',
          body: JSON.stringify({ ...note, updated: new Date() }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong' + response.data);
      }

      // const data = response.json();
      setIsSubmitting(false);
      setDidSubmit(true);
    } catch (error) {
      setHttpError(error.message);
    }
  };

  const updateNote = async noteID => {
    setDidSubmit(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://notes-app-d2000-default-rtdb.firebaseio.com/notes/${noteID}.json`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...note, updated: new Date() }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // const data = response.json();
      setDidSubmit(true);
      setIsSubmitting(false);
    } catch (error) {
      setHttpError(error.message);
    }

    setNote(null);
  };

  const deleteNote = async noteID => {
    setDidSubmit(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://notes-app-d2000-default-rtdb.firebaseio.com/notes/${noteID}.json`,
        {
          method: 'DELETE',
          body: JSON.stringify(note),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // const data = response.json();
      setDidSubmit(true);
      setIsSubmitting(false);
    } catch (error) {
      setHttpError(error);
    }

    setNote(null);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        note,
        isLoading,
        httpError,
        getNote,
        setNote,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
