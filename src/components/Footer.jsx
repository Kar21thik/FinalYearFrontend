import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="contact-us" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <h3 className="text-md font-semibold mb-4 text-center">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-neutral-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-neutral-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-neutral-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-neutral-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-neutral-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-neutral-300"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-neutral-600 text-white rounded-md hover:bg-neutral-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Location Map */}
        <div className="flex justify-center items-center">
          <div className="w-full h-64 lg:h-auto max-w-md">
            <iframe
              className="w-full h-full border border-neutral-600 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1424357487593!2d144.95714511532007!3d-37.81260897975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1f2c9c3fb%3A0xbbf13cbbc5ff02d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619656740955!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
