import React, { useState } from "react";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import FileUpload from "./FileUpload";

const LlamaChat = () => {
  const [chatResponse, setChatResponse] = useState("");
  const [message, setMessage] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContentRead = (content: string) => {
    console.log("Content:", content);
    // Handle the content as needed
    setFileContent(content);
  };

  const generateLlamaChatResponse = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/llamaIndex", {
        message,
        fileContent,
      });
      setChatResponse(response.data);

      toast.success("Generated Llama Chat Response");
    } catch (error) {
      console.error(error, "LlamaChat generateLlamaChatResponse");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 flex-1 border rounded p-4">
        <div>
          <div className="text-xl">Llama Chat:</div>
          <FileUpload onContentRead={handleContentRead} />
        </div>
        <div className="flex gap-4 text-center">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add message here"
            className="placeholder:text-gray-500"
          />
          <button
            className="text-xl p-2 w-[180px] rounded border-2 border-black hover:bg-gray-400"
            onClick={generateLlamaChatResponse}
            disabled={loading || message == "" || fileContent == ""}
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </div>
        <p className={fileContent == "" ? "text-red-500" : "hidden"}>
          Need to upload file
        </p>
        <p className={message == "" ? "text-red-500" : "hidden"}>
          Need to add message
        </p>
      </div>
      <div className="flex-1 border rounded p-4">
        <div className="whitespace-break-spaces">{chatResponse}</div>
      </div>
    </div>
  );
};

export default LlamaChat;
