import { FaRegCircleUser } from "react-icons/fa6";

export default function TopBar({hide}) {
    return (
      <div className="bg-purple-800 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="images/123.jpg"
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="text-sm">Hello, Welcome 🎉</p>
            <p className="font-semibold">Ayush Singh</p>
          </div>
        </div>
        <button style={{fontSize: '35px'}} onClick={()=>hide()}>
          <FaRegCircleUser />
        </button>
      </div>
    );
  }
  