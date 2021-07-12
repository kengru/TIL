function Note({ content, tags }: Note) {
  return (
    <li className="flex flex-col justify-between h-44 bg-palette-1 p-5 border-2 border-transparent rounded-md shadow">
      <p className="text-palette-3">{content}</p>
      <ul className="space-x-4">
        {tags.map((tag) => (
          <li className="inline text-palette-2 italic font-medium" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}

export { Note };
