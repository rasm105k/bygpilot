"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { siteConfig } from "@/lib/config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const { error } = await supabase
      .from("leads")
      .insert([{ full_name: fullName, email, message }]);

    if (error) {
      console.error("Supabase error:", error);
      setErrorMessage(error.message || "Noget gik galt. Prøv igen.");
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="form-section-title">Klar til at komme i gang?</h2>
        <p className="form-section-subtitle">
          Udfyld formularen, så vender vi tilbage inden for 24 timer med en gratis demo.
        </p>
        <div className="contact-form">
          {status === "success" ? (
            <div className="success-msg">
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tak for din henvendelse! 🎉</p>
              <p>Vi vender tilbage inden for 24 timer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="full_name">Fulde navn</label>
                <input type="text" id="full_name" name="full_name" required placeholder="Jens Hansen" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="jens@example.dk" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Besked</label>
                <textarea id="message" name="message" required rows={4} placeholder="Fortæl lidt om din virksomhed..." />
              </div>
              {status === "error" && <div className="error-msg">{errorMessage}</div>}
              <button type="submit" disabled={status === "loading"} className="submit-btn">
                {status === "loading" ? "Sender..." : "Prøv gratis i 14 dage"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
