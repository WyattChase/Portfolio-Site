import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import StarfieldBackground from "./Starfield-background";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      // Add a new document in the "contacts" collection with the form data
      await addDoc(collection(db, "contacts"), { name, email, message });
      setSubmitted(true);
      // Optionally, reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6">
         <StarfieldBackground />
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      {submitted ? (
        <p className="bg-green-100 text-green-800 p-4 rounded">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 h-32"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
