import { useState } from "react";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwgQiIy50pMsEfZtZIRDTwJ42b6aOniAJcaZm8aoktX62UNktqKnQ7TT3rYeyXHi-tt/exec";

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (formData) => {
    setStatus("sending");

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: formData.email }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setMessage("Subscription successful!");
      } else {
        setStatus("error");
        setMessage("Failed to subscribe. Try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <Newsletter
      status={status}
      message={message}
      onValidated={handleSubscribe}
    />
  );
};
