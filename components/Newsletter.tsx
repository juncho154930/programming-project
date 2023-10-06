"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { Input } from "./ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (email) alert("Newletter Email Capture not yet implemented");
    alert("Please enter email");
  }
  return (
    <div className="mb-32 flex items-center justify-center gap-10 container">
      <h3 className="font-montserrat text-xl whitespace-nowrap font-bold text-indigo-500">
        Join The Newsletter:
      </h3>
      <form onSubmit={handleSubmit} className="flex gap-6 w-[640px]">
        <Input
          value={email}
          type="email"
          placeholder="Email"
          className="rounded border-indigo-500 border-2 placeholder:text-gray-600 text-xl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default Newsletter;
