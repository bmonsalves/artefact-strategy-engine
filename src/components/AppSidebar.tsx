import { User, Settings, Trash2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AppSidebarProps {
  onReset: () => void;
}

const AppSidebar = ({ onReset }: AppSidebarProps) => {
  return (
    <aside className="w-64 shrink-0 border-r bg-card p-5 flex flex-col gap-6">
      {/* Consultant Info */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full artefact-gradient flex items-center justify-center">
          <User className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Nico Conde</p>
          <p className="text-xs text-muted-foreground">Lead Consultant</p>
        </div>
      </div>

      <Separator />

      {/* Control Panel */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Settings className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Control Panel
          </span>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-secondary p-3">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Layers className="h-4 w-4 text-primary" />
              <span>Active Project</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Enterprise Strategy</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button
          variant="destructive"
          className="w-full gap-2"
          onClick={onReset}
        >
          <Trash2 className="h-4 w-4" />
          Reset / Clear
        </Button>
      </div>
    </aside>
  );
};

export default AppSidebar;
