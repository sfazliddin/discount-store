export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700">
            We&apos;d love to hear from you! Reach out to us using the form
            below or through our email and phone number.
          </p>
          <form className="mt-6 flex flex-col gap-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
