"use client";

function LogoutButton() {
  return (
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log("hello")}>
      Sign Out
    </button>
  );
}

export default LogoutButton;
