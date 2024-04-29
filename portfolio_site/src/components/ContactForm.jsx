const ContactForm = () => {
    return (
      <div className="max-w-lg mx-auto p-8">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4"></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    );
  };

  export default ContactForm
  