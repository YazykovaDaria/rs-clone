export default function TwitContent({ text }: { text: string }) {
  return (
    <pre
      className="text-slate-900 lg:pr-10 max-w-[90%] dark:text-slate-100"
      style={{
        textAlign: 'justify',
        fontFamily: 'inherit',
        whiteSpace: 'pre-line',
      }}
    >
      {text}
    </pre>
  );
}
