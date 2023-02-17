export default function TwitContent({ text }: { text: string }) {
  return (
    <div className="text-slate-900 lg:pr-10" style={{ textAlign: 'justify' }}>
      {text}
    </div>
  );
}
