import { Note } from "./components/Note";
import { notes } from "./notes/epic-react";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <ul className="p-4 space-y-4">
        {notes.map((note) => (
          <Note key={note.content.slice(0, 10)} {...note} />
        ))}
      </ul>
    </div>
  );
}

export { App };
