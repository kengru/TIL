function Note({ content, tags }: Note) {
  return (
    <li className="flex flex-col justify-between h-44 bg-primary p-6 border-2 border-transparent rounded-md shadow">
      <p className="text-gray-50">{content}</p>
      <ul className="space-x-4">
        {tags.map((tag) => (
          <li className="inline" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}

export { Note };
