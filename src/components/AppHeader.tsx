import { Rocket } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="border-b bg-card px-6 py-4 flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg artefact-gradient flex items-center justify-center artefact-glow">
          <Rocket className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold tracking-tight text-foreground">
            The Artefact OS
          </h1>
          <p className="text-xs text-muted-foreground">
            Strategic Architecture & Business Case Generator | Version 3.0 (Enterprise)
          </p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
