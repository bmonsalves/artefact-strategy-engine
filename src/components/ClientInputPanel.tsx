import { useState, useRef } from "react";
import { Upload, FileText, Rocket, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ClientInputPanelProps {
  onGenerate: (text: string, files: File[]) => void;
  isLoading: boolean;
}

const ClientInputPanel = ({ onGenerate, isLoading }: ClientInputPanelProps) => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (f) => f.name.endsWith(".txt") || f.name.endsWith(".docx")
    );
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        Input: Client Context
      </h2>

      {/* Drop Zone */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
          isDragOver
            ? "border-primary bg-accent"
            : "border-border hover:border-primary/50 hover:bg-accent/50"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".txt,.docx"
          multiple
          onChange={handleFileChange}
        />
        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
        <p className="text-sm font-medium text-foreground">
          Drop .txt or .docx files here
        </p>
        <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((file, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
            >
              <FileText className="h-3 w-3" />
              {file.name}
              <button onClick={() => removeFile(i)} className="hover:text-primary">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Text Input */}
      <Textarea
        placeholder="Paste interview notes or transcripts here..."
        className="min-h-[200px] resize-y text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Generate Button */}
      <Button
        size="lg"
        className="w-full gap-2 artefact-gradient artefact-glow text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
        onClick={() => onGenerate(text, files)}
        disabled={isLoading || (!text.trim() && files.length === 0)}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Rocket className="h-5 w-5" />
            Generate Value Proposal
          </>
        )}
      </Button>
    </div>
  );
};

export default ClientInputPanel;
