"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <svg
        className="animate-spin h-8 w-8 text-gray-600 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      <span className="text-lg font-medium text-gray-700">Loading...</span>
    </div>
  );
}
