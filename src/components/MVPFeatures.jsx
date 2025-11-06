import { ListChecks, Image as ImageIcon, MapPin, Users, Share2 } from "lucide-react";

const features = [
  {
    icon: ListChecks,
    title: "Curated template library",
    desc: "Clean, modern designs that adapt beautifully to mobile screens.",
  },
  {
    icon: ImageIcon,
    title: "Simple customization",
    desc: "Edit text, add a hero photo, set date/time, and drop in a Google Maps link.",
  },
  {
    icon: Users,
    title: "Guest list import",
    desc: "Paste emails or upload a CSV. Automatic dedupe and format checks.",
  },
  {
    icon: Share2,
    title: "One shareable link",
    desc: "Distribute via WhatsApp, email, or social in seconds.",
  },
  {
    icon: MapPin,
    title: "RSVP dashboard",
    desc: "See Attending, Not attending, and Maybe at a glance.",
  },
];

export default function MVPFeatures() {
  return (
    <section id="mvp" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="font-['Inter'] text-3xl font-semibold text-slate-900">MVP scope</h2>
          <p className="mt-2 text-slate-600">
            The first release focuses on simplicity and clarity. These features deliver the
            complete invitation workflow without clutter.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
          <h4 className="font-medium text-slate-900">Key UI/UX decisions</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            <li>Whitespace‑first layout with a calm, neutral palette and elegant typography.</li>
            <li>Step‑by‑step flow with a clear progress indicator and one action per screen.</li>
            <li>Inline, real‑time previews to reduce cognitive load and surprises.</li>
            <li>Accessible controls: large tap targets, readable contrast, keyboard friendly.</li>
            <li>Smart defaults and forgiving inputs (auto‑format, dedupe, and validation).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
