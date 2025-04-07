import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Contact us</h2>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-black font-medium mb-1">
          <FaEnvelope />
          <span>Email</span>
        </div>
        <p className="text-sm text-gray-700 ml-6">singh@gmail.com</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 text-black font-medium mb-1">
          <FaPhoneAlt />
          <span>Phone No.</span>
        </div>
        <p className="text-sm text-gray-700 ml-6">+91 11223 34455</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Ayush Singh"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="singh@example.com"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Message</label>
          <textarea
            placeholder="Enter your query………"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white resize-none focus:outline-none"
            rows="4"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
