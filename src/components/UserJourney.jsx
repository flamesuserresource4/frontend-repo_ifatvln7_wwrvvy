export default function UserJourney() {
  return (
    <section id="journey" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-['Inter'] text-3xl font-semibold text-slate-900">Primary user journey</h2>
        <p className="mt-2 max-w-prose text-slate-600">
          From landing to sharing your invitation, the experience is calm and linear. There are
          four guided steps, each focused on a single decision.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          <li className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Step 1</div>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">Choose a template</h3>
            <p className="mt-2 text-slate-600">
              Browse a curated gallery of minimalist, mobile‑responsive designs for weddings,
              birthdays, baby showers, and corporate events. Preview in mobile/desktop.
            </p>
          </li>

          <li className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Step 2</div>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">Customize the basics</h3>
            <p className="mt-2 text-slate-600">
              Edit event name and message, upload a primary photo, set date and time, and add a
              Google Maps link. All inputs are inline with instant preview.
            </p>
          </li>

          <li className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Step 3</div>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">Add guests</h3>
            <p className="mt-2 text-slate-600">
              Paste emails or import a CSV. The system cleans up formatting and highlights
              duplicates for you. You can also type names manually.
            </p>
          </li>

          <li className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Step 4</div>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">Share and track RSVPs</h3>
            <p className="mt-2 text-slate-600">
              Generate one shareable link for WhatsApp, email, or social media. A simple dashboard
              shows Attending, Not attending, and Maybe in real time.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
