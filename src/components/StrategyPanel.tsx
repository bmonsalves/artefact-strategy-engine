import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StrategyState, Slide } from "@/types/strategy";
import RefinementBox from "./RefinementBox";
import SlideEditor from "./SlideEditor";
import MermaidViewer from "./MermaidViewer";
import { FileText, Network } from "lucide-react";

interface StrategyPanelProps {
  state: StrategyState;
  onUpdateSlide: (id: number, updates: Partial<Slide>) => void;
  onRefine: (command: string) => void;
  isRefining: boolean;
}

const StrategyPanel = ({ state, onUpdateSlide, onRefine, isRefining }: StrategyPanelProps) => {
  return (
    <div className="flex flex-col gap-5">
      <RefinementBox onRefine={onRefine} isRefining={isRefining} />

      <Tabs defaultValue="slides" className="w-full">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="slides" className="gap-2 text-sm">
            <FileText className="h-4 w-4" />
            Slides Edition
          </TabsTrigger>
          <TabsTrigger value="architecture" className="gap-2 text-sm">
            <Network className="h-4 w-4" />
            Architecture
          </TabsTrigger>
        </TabsList>
        <TabsContent value="slides" className="mt-4">
          <SlideEditor slides={state.slides} onUpdateSlide={onUpdateSlide} />
        </TabsContent>
        <TabsContent value="architecture" className="mt-4">
          <MermaidViewer code={state.mermaid_code} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StrategyPanel;
