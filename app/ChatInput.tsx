"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "@/typings";

function ChatInput() {
  const [input, setInput] = useState("");
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "octonimbus",
      profilePic: "diego-sanchez-octo-unsplash.jpg",
      email: "octonimbus@octoeverything.com",
    };

    const uploadMessage = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, }),
      });
      const data = await res.json();
      console.log('MESSAGE ADD >>>>>>>', data);
    };
    uploadMessage();
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-slate-300"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter your words here"
        className="flex-1 rounded border border-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disable:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
