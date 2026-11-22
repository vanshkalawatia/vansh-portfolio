import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setSenderEmail("");
        setSubject("");
        setMessage("");
        return;
      }
    } catch {
      // Backend not running, fallback to mailto
    }

    // Fallback: opens mailto client with prefilled details
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject || `Portfolio Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus("success");
  };

  return (
    <div className="border border-border/70 bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mt-10 max-w-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-bold text-lg text-foreground tracking-tight">Send a Direct Message</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Questions, collaboration, or just want to say hi? Leave a note below.
          </p>
        </div>
        <span className="mono-label text-xs text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
          Open to connect
        </span>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
          <h5 className="font-bold text-foreground">Message Sent!</h5>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Thanks for reaching out! I will get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn-push inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-border hover:border-primary transition-colors mt-3"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block mono-label text-xs text-muted-foreground mb-1.5">
                YOUR NAME *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block mono-label text-xs text-muted-foreground mb-1.5">
                EMAIL ADDRESS *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block mono-label text-xs text-muted-foreground mb-1.5">
              SUBJECT
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Collaboration / Backend discussion"
              className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block mono-label text-xs text-muted-foreground mb-1.5">
              MESSAGE *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Vansh, I saw your GitHub projects and wanted to connect..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-rose-500 text-xs py-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || "Failed to send message. Please try again."}</span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-push inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
            <span className="text-xs text-muted-foreground font-mono">
              Direct inbox delivery
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
