export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Let’s Connect
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
        Got an idea, project, or just want to say hi?  
        I’m open for freelance work, collaborations, or a quick tech chat.
      </p>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="max-w-xl mx-auto text-left space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition font-medium"
        >
          ✉️ Send Message
        </button>
      </form>
    </section>
  );
}
 