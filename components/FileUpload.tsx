import React, { useCallback, useState, useRef } from "react";

const validFileExtensions = [".txt", ".pdf", ".csv", ".md", ".docx"];

interface FileUploadProps {
  onContentRead: (content: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onContentRead }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];

      if (file) {
        const extension = file.name.split(".").pop();
        if (extension && validFileExtensions.includes(`.${extension}`)) {
          setFileName(file.name);
          readFileContent(file);
        } else {
          alert(
            "Invalid file type. Please upload a .txt, .pdf, .csv, .md, or .docx file."
          );
        }
      }
    },
    []
  );

  const readFileContent = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onContentRead(content);
    };
    reader.readAsText(file);
  };

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        setFileName(file.name);
        readFileContent(file);
      } else {
        alert("No file uploaded.");
      }
    },
    [onContentRead]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded p-5 text-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="mb-2">
        {fileName
          ? `File Selected: ${fileName}`
          : "Drag & Drop a .txt, .pdf, .csv, .md, or .docx file here"}
      </p>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Select File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".txt,.pdf,.csv,.md,.docx"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
