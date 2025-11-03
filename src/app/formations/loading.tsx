export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <div className="h-8 w-56 animate-pulse rounded bg-secondary" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-5">
            <div className="h-4 w-3/4 animate-pulse rounded bg-secondary" />
            <div className="mt-3 h-16 w-full animate-pulse rounded bg-secondary" />
            <div className="mt-4 h-3 w-24 animate-pulse rounded bg-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}


