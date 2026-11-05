/** The owner's name as words, with the accent ones in the brand color. */
export function NameWords({
  words,
}: {
  words: readonly { text: string; accent: boolean }[];
}) {
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className={w.accent ? "text-brand-ink" : undefined}>
          {i > 0 && " "}
          {w.text}
        </span>
      ))}
    </>
  );
}
