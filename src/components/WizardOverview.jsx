import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Template", desc: "Pick a modern, mobile‑first design" },
  { id: 2, title: "Details", desc: "Text, photo, date, time, map link" },
  { id: 3, title: "Guests", desc: "Import CSV or paste emails" },
  { id: 4, title: "Share", desc: "Get a single link + RSVP dashboard" },
];

export default function WizardOverview() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="md:flex md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-['Inter'] text-3xl font-semibold text-slate-900">The 4‑step wizard</h2>
            <p className="mt-2 text-slate-600">
              Designed so non‑technical users never feel overwhelmed. Each screen asks one simple
              question and clearly shows what comes next.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-500">Step {s.id}</div>
                <Check className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{s.title}</div>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
