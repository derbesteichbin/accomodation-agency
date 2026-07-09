export function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <div className="mt-8 whitespace-pre-line leading-relaxed text-stonewarm">
        {body || "Content coming soon."}
      </div>
    </main>
  );
}
