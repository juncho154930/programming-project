"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import OpenAI from "openai";
import { cn } from "@/lib/utils";

const MockDatastream = () => {
  const [mockData, setMockData] = useState<any[]>([]);
  const [endpointUrl, setEndpointUrl] = useState<string | undefined>();
  const [messages, setMessages] = useState<
    OpenAI.Chat.Completions.ChatCompletionMessage[]
  >([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMockUserData = async () => {
    try {
      await axios.get("/api/v1/generateData?type=users").then((response) => {
        setEndpointUrl(response.config.url);
        setMockData(response.data);
      });
      toast.success("Retrieved mock user data");
    } catch (error) {
      console.error(error, "MockDatastream fetchMockUserData");
      toast.error("Something went wrong");
    }
  };

  const fetchMockStockData = async () => {
    try {
      await axios.get("/api/v1/generateData?type=stocks").then((response) => {
        setEndpointUrl(response.config.url);
        setMockData(response.data);
      });
      toast.success("Retrieved mock stock data");
    } catch (error) {
      console.error(error, "MockDatastream fetchMockStockData");
      toast.error("Something went wrong");
    }
  };

  const generateOpenaiResponse = async () => {
    try {
      setLoading(true);
      const userMessage: OpenAI.Chat.Completions.ChatCompletionMessage = {
        role: "user",
        content: prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/v1/promptOpenai", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      setPrompt("");

      toast.success("Generated Open AI Response");
    } catch (error) {
      console.error(error, "MockDatastream generateOpenaiResponse");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex flex-col">
      <p className="text-center text-xl">
        Eventually build out a service for people to call API endpoints for mock
        data. Maybe even useful for simulating data for unit testing.
      </p>
      <div className="flex w-full h-full p-8 my-8 border-2 border-black rounded shadow-xl">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="flex space-x-4">
            <button
              className="text-xl p-4 rounded border-2 border-black hover:bg-gray-400"
              onClick={fetchMockUserData}
            >
              Generate User Data!
            </button>
            <button
              className="text-xl p-4 rounded border-2 border-black hover:bg-gray-400"
              onClick={fetchMockStockData}
            >
              Generate Stock Data!
            </button>
          </div>
          <p className="mt-4">Endpoint: {endpointUrl}</p>
        </div>
        <div className="flex flex-1 flex-col h-[400px] overflow-y-scroll">
          {mockData.map((data: any) => (
            <div key={data.id} className="">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
      <p>
        We need to click on the button to submit. For example we cant just press
        enter button - to fix this we need to change it to a &lt;form&gt; Maybe
        a challenge for you guys to try
      </p>
      <div className="flex p-4 h-[500px] overflow-y-scroll border rounded">
        <div className="flex-1">
          <div className="flex gap-8 w-full">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              className="text-xl p-4 w-[280px] rounded border-2 border-black hover:bg-gray-400"
              onClick={generateOpenaiResponse}
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit to OpenAi"}
            </button>
          </div>
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? "YOU: " : "CHATGPT: "}
                {message.content || ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockDatastream;
