import Hero from "./components/Hero";
import UserJourney from "./components/UserJourney";
import WizardOverview from "./components/WizardOverview";
import MVPFeatures from "./components/MVPFeatures";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <WizardOverview />
      <UserJourney />
      <MVPFeatures />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          Built for a calm, elegant invitation experience.
        </div>
      </footer>
    </div>
  );
}

export default App;
