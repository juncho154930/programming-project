"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MockDatastream = () => {
  const [mockData, setMockData] = useState<any[]>([]);
  const [endpointUrl, setEndpointUrl] = useState<string | undefined>();

  const fetchMockUserData = async () => {
    try {
      await axios.get("/api/v1/generateData?type=user").then((response) => {
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
      await axios.get("/api/v1/generateData?type=stock").then((response) => {
        setEndpointUrl(response.config.url);
        setMockData(response.data);
      });
      toast.success("Retrieved mock stock data");
    } catch (error) {
      console.error(error, "MockDatastream fetchMockStockData");
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container">
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
    </div>
  );
};

export default MockDatastream;
