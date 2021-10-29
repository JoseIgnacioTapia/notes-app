import { getTitle } from './getTitle';

export const getContent = note => {
  // Get content after title
  let title = getTitle(note);
  let content = note.body.replaceAll('\n', '');
  content = content.replaceAll(title, '');

  if (content.length > 45) {
    return content.slice(0, 45) + '...';
  } else {
    return content;
  }
};
