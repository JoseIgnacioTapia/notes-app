import { useState, useEffect, createContext } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disSubmit, setDisSubmit] = useState(false);

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
  }, [urlGET]);

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

  return (
    <NotesContext.Provider
      value={{ notes, note, isLoading, httpError, getNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
