import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <TitleHeader title="Let’s build the useful layer." sub="06 Contact" />

      <div className="contact-grid">
        <aside className="terminal-window">
          <div className="terminal-bar">
            <div className="terminal-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>Contact protocol</span>
            <span className="text-electric">online</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">›</span> Available for AI,
              data, and cloud engineering collaborations.
            </p>
            <p>
              <span className="terminal-prompt">›</span> Best fit: projects
              where reliability, documentation, and measurable outcomes matter.
            </p>
            <div className="rounded-lg border border-line bg-night-100/60 p-5">
              <p className="mono-label mb-3 text-electric">Response pattern</p>
              <ul className="space-y-2 text-muted-strong">
                <li>01. Scope and constraints</li>
                <li>02. Technical feasibility</li>
                <li>03. Delivery path</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="rounded-xl p-6 glass-panel md:p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-6"
          >
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ada Lovelace"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ada@example.com"
                inputMode="email"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Project context</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you are building, what is broken, or what needs to scale."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="button-primary">
              {loading ? "Sending..." : "Send Message"}
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
