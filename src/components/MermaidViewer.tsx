import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Building2 } from "lucide-react";

interface MermaidViewerProps {
  code: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#eef1ff",
    primaryBorderColor: "#273275",
    primaryTextColor: "#273275",
    lineColor: "#1f65ff",
    secondaryColor: "#f0f4ff",
    tertiaryColor: "#ffeef5",
    fontFamily: '"DM Sans", sans-serif',
  },
});

const MermaidViewer = ({ code }: MermaidViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const render = async () => {
      if (!containerRef.current || !code?.trim()) return;

      // Check container dimensions to avoid NaN errors
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      try {
        setError(null);
        const id = `mermaid-${Date.now()}`;
        const { svg } = await mermaid.render(id, code);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to render diagram");
      }
    };

    // Small delay to ensure container is mounted and sized
    const timer = setTimeout(render, 100);
    return () => clearTimeout(timer);
  }, [code]);

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
        <Building2 className="h-4 w-4 text-primary" />
        Federated Lakehouse Reference Architecture
      </h3>

      <div
        className="rounded-lg border bg-card overflow-auto"
        style={{ minHeight: "800px" }}
      >
        {error ? (
          <div className="p-6 text-sm text-destructive">{error}</div>
        ) : (
          <div ref={containerRef} className="p-6 flex items-start justify-center" />
        )}
      </div>
    </div>
  );
};

export default MermaidViewer;
