import { FaHome, FaCheckCircle, FaBook, FaBookmark, FaBell } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 text-sm">
      <div className="flex flex-col items-center text-gray-600">
        <FaHome />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaCheckCircle />
        <span>Compliance</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaBook />
        <span>Eligibility</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaBookmark />
        <span>Resource</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaBell />
        <span>Reminder</span>
      </div>
    </nav>
  );
}
