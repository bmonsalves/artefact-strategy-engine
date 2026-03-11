import { useState } from "react";
import { Download, FileDown, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExportSection = () => {
  const [generating, setGenerating] = useState(false);
  const [ready, setReady] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setReady(false);
    setTimeout(() => {
      setGenerating(false);
      setReady(true);
    }, 2000);
  };

  return (
    <div className="border-t bg-card p-5 flex items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        Export your strategy deck as a PowerPoint presentation
      </div>
      <div className="flex gap-3">
        <Button
          onClick={handleGenerate}
          disabled={generating}
          className="gap-2 artefact-gradient text-primary-foreground hover:opacity-90"
        >
          {generating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileDown className="h-4 w-4" />
              Generate Final PowerPoint (.pptx)
            </>
          )}
        </Button>
        {ready && (
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
            Download .pptx
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExportSection;
