"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    alert("Contact Form Not Yet Functional");
    /*

    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
		*/
  }
  return (
    <section className="container pt-12 pb-32 flex gap-20" id="contact">
      <form onSubmit={handleSubmit} className="flex-1">
        <h3 className="text-4xl text-indigo-500 font-bold">Contact us!</h3>
        <div className="w-full flex flex-col my-4">
          <Label className="font-bold text-gray-800 mb-4" htmlFor="name">
            Name
          </Label>
          <Input
            type="text"
            placeholder="Name"
            minLength={3}
            maxLength={150}
            required
            className="py-6 px-4 text-md font-semibold bg-gray-50 border-indigo-300 border rounded placeholder:text-gray-400"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <Label className="font-bold text-gray-800 mb-4" htmlFor="email">
            Email
          </Label>
          <Input
            type="email"
            placeholder="Email"
            minLength={5}
            maxLength={150}
            required
            className="py-6 px-4 text-md font-semibold bg-gray-50 border-indigo-300 border rounded placeholder:text-gray-400"
            autoComplete="off"
            id="email"
          />
        </div>
        <div>
          <Label className="font-bold text-gray-800 mb-4" htmlFor="message">
            Message
          </Label>
          <Textarea
            placeholder="Ask us anything!"
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="w-full p-4 text-md font-semibold bg-gray-50 border-indigo-300 border rounded placeholder:text-gray-400"
          />
        </div>
        <CustomButton type="submit" disabled={loading} buttonClass="mt-10">
          Send Message
        </CustomButton>
      </form>
      <div className="flex flex-1 flex-col gap-6 text-lg">
        <h3 className="text-3xl text-indigo-500 font-bold">
          Better yet, see us in person!
        </h3>
        <div>
          <p className="max-w-lg text-xl font-semibold">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
        </div>
        <div>
          <p>Company #1234567</p>
          <p>1234 W Plano Pkwy Ste 123</p>
          <p>Plano, TX 75075</p>
          <p>
            <a
              href="tel:(214) 555-1234"
              className="underline font-semibold hover:text-indigo-500"
            >
              (214) 555-1234
            </a>
          </p>
        </div>
        <div>
          <p>Branch #1234567</p>
          <p>123 Hwy 75</p>
          <p>Dallas, Tx 12345</p>
          <p>
            <a
              href="tel:(214) 555-1234"
              className="underline font-semibold hover:text-indigo-500"
            >
              (214) 555-1234
            </a>
          </p>
        </div>
        <div>
          <a
            href="mailto:hello@testing.com"
            className="underline font-semibold hover:text-indigo-500"
          >
            hello@testing.com
          </a>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">Hours</h3>
          <p>Monday - Friday: 10am - 3pm</p>
          <p>Saturday & Sunday: By Appointment</p>
        </div>
      </div>
    </section>
  );
}
