import { Search, User } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full h-16 bg-[#1A1C23] flex justify-between items-center px-4">
      <div className="flex-1 pl-56">
        <div className="relative w-full max-w-lg">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="text-blue-400 size-5" />
          </span>
          <input
            type="text"
            placeholder="Search for projects"
            className="w-full pl-12 pr-4 py-2 rounded bg-[#23242b] text-gray-200 focus:outline-none border border-white/20"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <button>
          <User className="w-8 h-8 rounded-full object-cover text-white" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
