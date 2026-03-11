import { useState } from "react";
import { Wand2, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RefinementBoxProps {
  onRefine: (command: string) => void;
  isRefining: boolean;
}

const RefinementBox = ({ onRefine, isRefining }: RefinementBoxProps) => {
  const [command, setCommand] = useState("");

  const handleApply = () => {
    if (command.trim()) {
      onRefine(command);
      setCommand("");
    }
  };

  return (
    <div className="rounded-lg border-2 border-primary bg-accent p-4">
      <h3 className="text-sm font-display font-semibold text-foreground flex items-center gap-2 mb-3">
        <MessageSquare className="h-4 w-4 text-primary" />
        Strategic AI Adjustment
      </h3>
      <div className="flex gap-2">
        <Input
          placeholder='e.g. "Slide 3: summarize the content"'
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApply()}
          className="text-sm"
        />
        <Button
          onClick={handleApply}
          disabled={!command.trim() || isRefining}
          className="gap-1.5 shrink-0 artefact-gradient text-primary-foreground hover:opacity-90"
        >
          {isRefining ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="h-4 w-4" />
          )}
          Apply
        </Button>
      </div>
    </div>
  );
};

export default RefinementBox;
