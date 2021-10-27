import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import './App.css';
import NotesPages from './pages/NotesPages';
import Note from './pages/Note';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesPages} path="/" exact />
          <Route component={Note} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
