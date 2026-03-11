import { useState, useCallback } from "react";
import { StrategyState, Slide, MOCK_STRATEGY } from "@/types/strategy";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import ClientInputPanel from "@/components/ClientInputPanel";
import StrategyPanel from "@/components/StrategyPanel";
import ExportSection from "@/components/ExportSection";

const Index = () => {
  const [strategy, setStrategy] = useState<StrategyState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefining, setIsRefining] = useState(false);

  const handleGenerate = useCallback((_text: string, _files: File[]) => {
    setIsLoading(true);
    setTimeout(() => {
      setStrategy({ ...MOCK_STRATEGY });
      setIsLoading(false);
    }, 2500);
  }, []);

  const handleReset = useCallback(() => {
    setStrategy(null);
  }, []);

  const handleUpdateSlide = useCallback((id: number, updates: Partial<Slide>) => {
    setStrategy((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        slides: prev.slides.map((s) => (s.id === id ? { ...s, ...updates } : s)),
      };
    });
  }, []);

  const handleRefine = useCallback((command: string) => {
    setIsRefining(true);
    // Simulate AI refinement
    setTimeout(() => {
      setStrategy((prev) => {
        if (!prev) return prev;
        // Mock: append note to first slide
        const slides = [...prev.slides];
        if (slides.length > 0) {
          slides[0] = {
            ...slides[0],
            bullets: [...slides[0].bullets, `[AI] ${command}`],
          };
        }
        return { ...prev, slides };
      });
      setIsRefining(false);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar onReset={handleReset} />
        <main className="flex-1 overflow-auto">
          <div className={`p-6 grid gap-6 ${strategy ? "grid-cols-1 lg:grid-cols-[5fr_6fr]" : "max-w-2xl mx-auto"}`}>
            <div>
              <ClientInputPanel onGenerate={handleGenerate} isLoading={isLoading} />
            </div>
            {strategy && (
              <div>
                <StrategyPanel
                  state={strategy}
                  onUpdateSlide={handleUpdateSlide}
                  onRefine={handleRefine}
                  isRefining={isRefining}
                />
              </div>
            )}
          </div>
          {strategy && <ExportSection />}
        </main>
      </div>
    </div>
  );
};

export default Index;
