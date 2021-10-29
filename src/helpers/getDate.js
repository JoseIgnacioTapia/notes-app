export const getDate = note => {
  return new Date(note.updated).toLocaleDateString();
};
