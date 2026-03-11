import { Slide } from "@/types/strategy";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Presentation } from "lucide-react";

interface SlideEditorProps {
  slides: Slide[];
  onUpdateSlide: (id: number, updates: Partial<Slide>) => void;
}

const SlideEditor = ({ slides, onUpdateSlide }: SlideEditorProps) => {
  return (
    <div className="space-y-2">
      <Accordion type="multiple" defaultValue={slides.map((s) => String(s.id))}>
        {slides.map((slide) => (
          <AccordionItem key={slide.id} value={String(slide.id)} className="border rounded-lg px-4 mb-2 bg-card">
            <AccordionTrigger className="text-sm font-medium hover:no-underline gap-2">
              <span className="flex items-center gap-2 text-left">
                <Presentation className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">Slide {slide.id}</span>
                <span className="truncate">{slide.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Title
                </label>
                <Input
                  value={slide.title}
                  onChange={(e) => onUpdateSlide(slide.id, { title: e.target.value })}
                  className="text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Content (one bullet per line)
                </label>
                <Textarea
                  value={slide.bullets.join("\n")}
                  onChange={(e) =>
                    onUpdateSlide(slide.id, {
                      bullets: e.target.value.split("\n"),
                    })
                  }
                  className="min-h-[120px] text-sm"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SlideEditor;
