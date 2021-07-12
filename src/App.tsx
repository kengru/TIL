import { useState } from "react";
import { Note } from "./components/Note";
import { notes } from "./notes/epic-react";

function App() {
  const [query, setQuery] = useState("");
  const queryedNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(query)
  );

  return (
    <div className="h-screen bg-palette-3">
      <div className="p-4">
        <label htmlFor="query">Filter</label>
        <input
          id="query"
          type="text"
          className="ml-4"
          value={query}
          autoComplete="off"
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
      </div>
      <ul className="p-4 space-y-4">
        {queryedNotes.map((note) => (
          <Note key={note.content.slice(0, 10)} {...note} />
        ))}
      </ul>
    </div>
  );
}

export { App };
