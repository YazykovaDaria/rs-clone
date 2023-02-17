export default function TwitContent({ text }: { text: string }) {
  return (
    <pre
      className="text-slate-900 lg:pr-10"
      style={{ textAlign: 'justify', fontFamily: 'inherit' }}
    >
      {text}
    </pre>
  );
}
