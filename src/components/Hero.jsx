import { Sparkles, Share2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              <Sparkles className="h-4 w-4 text-slate-500" />
              Minimalist elegance • Effortless usability
            </div>
            <h1 className="mt-6 font-['Inter'] text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Create beautiful digital invitations without the overwhelm
            </h1>
            <p className="mt-4 max-w-prose text-slate-600">
              A calm, step-by-step experience for weddings, birthdays, baby showers, and
              corporate events. Choose a modern template, customize the basics, and share a
              single link.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#journey"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Start the 4‑step wizard
              </a>
              <a
                href="#mvp"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Share2 className="h-4 w-4" />
                See MVP scope
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
              <div className="h-full w-full grid grid-cols-2 gap-1 p-6">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="h-3 w-20 rounded bg-slate-200" />
                  <div className="mt-3 h-2 w-32 rounded bg-slate-100" />
                  <div className="mt-6 h-28 w-full rounded-lg bg-slate-100" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="mt-3 h-2 w-28 rounded bg-slate-100" />
                  <div className="mt-6 h-7 w-full rounded bg-slate-900" />
                  <div className="mt-2 h-7 w-2/3 rounded bg-slate-200" />
                </div>
                <div className="col-span-2 mt-2 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-28 rounded bg-slate-200" />
                    <div className="h-7 w-28 rounded bg-slate-900" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-slate-100" />
                    <div className="h-16 rounded-lg bg-slate-100" />
                    <div className="h-16 rounded-lg bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
